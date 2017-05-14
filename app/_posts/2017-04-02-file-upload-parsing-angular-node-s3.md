---
layout: post
title: "Using Angular, Node, and AWS to Parse, Upload, and Store PDFs and Form Data"
date: 2017-04-02
---

On a recent project, I was tasked with performing the following development tasks:
* Allow users to upload documents to web application
* On user trigger, send n of the uploaded documents to be uploaded to an AWS S3 bucket
* If this document is a PDF form, parse the values and store them in a database

This flow of user operations was insightful and challenging to build, so I wanted to write up the solution as to how my team and I achieved this. A few libarires and tools made this a lot easier to implement: ng-file-upload for the AngularJS web app, HummusPDF for Node, and the AWS Node SDK. This guide will touch on all three of the tools briefly, and also mention some others that were used as best practice throughout.

### Web-App Uploading with ng-file-upload

[Ng-file-upload](https://github.com/danialfarid/ng-file-upload) is a really useful AngularJS directive that comes with a lot of nice features out-of-the-box. A couple worth mentioning are support for both file picker and drag and drop functionality, ability to upload several files at once, and native validation support for filetypes. Not to mention abundant documentation, examples, and ability to use ng-file-uploads own Angular services, or roll your own with your own $http request.

Ng-file-upload is pretty straightforward to integrate with any AngularJS app, so I won't get into those details here. However, I think it is worth showing an example $http service when uploading multipart/form-data, as this becomes a little tricky with Angular.

```javascript
function sendFiles(files) {
  let fd = new FormData();
  files.forEach(file => {
    fd.append('files', file);
  });
  return $http.post('/api/files/', fd, {
    transformRequest: angular.identity,
    headers: {
      'Content-Type': undefined
    }
  });
}
```

A couple of things to note here is the construction of a [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData) object (a set of key/value pairs representing form fields and their values), the passing of this formdata object (fd) into the $http post request body, and the configuration options. Specfically, `transformRequest: angular.identity` prevents Angular from doing anything to our formdata, such as serializing it. Angular's default Content-type for post (and put) requests is application/json, so we want to override that as well and let the browser do the work of setting the content-type correctly to multipart/form-data.

### Node: Receiving, Storing, and Parsing Files

Now let's take a look at our Node setup. We are using [multer]( https://github.com/expressjs/multer) as middleware for handling multipart/form-data, the content-type of our request. Our config for this route looks similar to the following:

```javascript
var express = require('express');
var controller = require('./file.controller');
var router = express.Router();
var multer = require('multer');
var upload = multer();
router.post('/', upload.any(), controller.index);
module.exports = router;
```

We require multer and for this example allow any files that come as part of the request. This array of files is then stored in req.files, and is where our route controller will be accessing the file information.

When the controller receives the request object passed from multer, we can see what our array of files now looks like:

```javascript
console.log(Object.keys(req.files[0])); // log propertes of the first file
// [fieldname, originalname, encoding, mimetype, size, destination, filename, path, buffer]
```

This is a lot of really useful information. A couple of the fields we will be using include originalname (original name of the uploaded file), mimetype (mimetype of the file), and buffer (a buffer of the entire file). Note that you should be validating the types of files that are uploaded to your Node app and database and while the web app and multer can provide some information on the mimetype, you should perform a stricter check using a library like [file-type](https://github.com/sindresorhus/file-type) that checks the file type of the actual buffer.

So at this point our Node app has the array of file information and each of their buffers, meaning we have a lot more power as to what we can do next. First, let's take a look at uploading the file to an AWS S3 bucket. I am going to assume you have installed the aws-sdk in Node and have the credentials loaded in Node to post to S3. If you're not familiar with the [AWS Node SDK](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html), check it out, and specifically the S3 examples. Following their guidelines, writing a post to S3 function could look something like this:

```javascript
function uploadToS3(fileBuffer, filename) {
  let s3 = new aws.S3();
  return new Promise((resolve, reject) => {
    s3.upload({
      Bucket: config.s3.bucket, // your S3 bucket
      Key: filename,
      Body: fileBuffer
    }, function(err, data) {
      if(err) {
        return reject(err);
      }
      return resolve(data);
    });
  });
}
```

With this function set up, we can iterate over our req.files array, and for each of them return a promise from our successful or failed post to S3. Let's create a new uploadFiles function that waits for all of our files to upload to S3.

```javascript
function uploadFiles(files) {
  return Promise.all(files.map(file => uploadToS3(file.buffer, file.originalname)));
}
```

Then we can call this function with our req.files array and handle the result.
```javascript
uploadFiles(req.files).then(() => {
  res.status(200).json('Success!');
}).catch(err => {
  res.status(500).json(`Error uploading files. Error: ${err}`);
});
```

As an MVP, this is some great functionality, but let's take it one step further with doing some PDF form parsing. I experiemented with a couple of different Node libraries for this functionality and was diappointed by the lack of capabilities across the board. By far the two best libraries I checked out were [PDF2JSON](https://github.com/modesty/pdf2json) and [HummusJS](https://github.com/galkahana/HummusJS). PDF2JSON was a lot easier to get up and running right away, but it lacked the ability to parse more then text fields and combo boxes on my PDF forms (so no checkbox or radio button parsing). HummusJS, on the other hand, was able to parse all form field types, so we will be using this library for this example.

Before we integrate HummusJS into our route controller, we need to do a little setup. HummusJS isn't ready to read from a buffer right away, so we need to write our own function to allow us to pass our file buffer into HummusJS's file reader. Add the following component to your Node app:

```javascript
/*
  PDFRStreamForBuffer is an implementation of a read stream using a supplied array
  https://github.com/galkahana/HummusJS/issues/121
  @author Luciano Júnior
*/

function PDFRStreamForBuffer(buffer) {
  this.innerBuffer = buffer;
  this.rposition = 0;
  this.fileSize = buffer.byteLength;
}

PDFRStreamForBuffer.prototype.read = function(inAmount) {
  var arr = [];

  for(var i = 0; i < inAmount; i++) {
    arr.push(this.innerBuffer[this.rposition + i]);
  }

  this.rposition += inAmount;
  return arr;
};

PDFRStreamForBuffer.prototype.notEnded = function() {
  return this.rposition < this.fileSize;
};

PDFRStreamForBuffer.prototype.setPosition = function(inPosition) {
  this.rposition = inPosition;
};

PDFRStreamForBuffer.prototype.setPositionFromEnd = function(inPosition) {
  this.rposition = this.fileSize - inPosition;
};

PDFRStreamForBuffer.prototype.skip = function(inAmount) {
  this.rposition += inAmount;
};

PDFRStreamForBuffer.prototype.getCurrentPosition = function() {
  return this.rposition;
};


module.exports = PDFRStreamForBuffer;
```

Second, HummusJS's main package doesn't actually come with PDF form parsing. However, the author of the package was kind enough to supply some samples for this functionality that can be found on the [HummusJSSamples](https://github.com/galkahana/HummusJSSamples/tree/master/parsing-form-values) page. Specifically, we will need the pdf-digital-form.js file copied into our application.

Now we are all set up to pass our file buffer to HummusJS and read our form conents. Let's create a new function the extracts form data for a file:

```javascript
// Make sure to include our new dependencies
import hummus from 'hummus';
import PDFDigitalForm from 'components/pdf-digital-form';
import PDFRStreamForBuffer from 'components/pdf-read-stream-buffer';

function getFileFormData(fileBuffer) {
  return new Promise((resolve, reject) => {
    let pdfReadStream = new PDFRStreamForBuffer(fileBuffer);
    let pdfParser = hummus.createReader(pdfReadStream);
    let digitalForm = new PDFDigitalForm(pdfParser);
    if(digitalForm.hasForm()) {
      return resolve(digitalForm.createSimpleKeyValue());
    }
    return reject();
  });
}
```

One thing to note is that HummusJS has two ways of giving us our extracted data. This first is the fields property on digital form (digitalForm.fields) and the second is the method createSimpleKeyValue(), which as you might guess, gives us a key value mapping of our form field names and values. The latter is what we implemented above.

Finally, we can add the getFileFormData function to our uploadFiles function from earlier and use promise chaining. We will also only upload parseable forms to our S3 bucket. Let's add that in now:

```javascript
function uploadFiles(files) {
  return Promise.all(files.map(file =>
    getFileFormData(file.buffer)
    .then(data => {
      // write our data to a db
    })
    .then(() => uploadToS3(file.buffer, file.originalname))
  ));
}
```

After you get the file's form data, you can do whatever you want with it (keep in mind that it is in an object from our createSimpleKeyValue method above)- write it to a database, check field values, etc.

In conclusion, this is a nice setup for a quick implementation of file uploading, parsing, and storing of both the document and the form data (if you choose to write it to a database). Although I like to hand-roll a lot of functionality, the libraries used in this project (ng-file-upload, multer, HummusJS, and the AWS SDK) make performing these operations a lot easier. Hopefully, this guide can be expanded upon in the future to provide even more functionality for document upload and PDF form parsing.

For reference:
* [Ng-file-upload](https://github.com/danialfarid/ng-file-upload)
* [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData)
* [multer]( https://github.com/expressjs/multer)
* [AWS Node SDK](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html)
* [HummusJS](https://github.com/galkahana/HummusJS)
