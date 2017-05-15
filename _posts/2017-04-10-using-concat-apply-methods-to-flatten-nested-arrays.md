---
layout: post
title: "Using the Concat and Apply Methods to Flatten Nested Arrays"
date: 2017-04-10
---

When using third-party APIs, or even making complex queries on your own APIs, sometimes data is returned in formats that are not so easy to manipulate. A recent example of this that I came across was a nested array strucutre. I was presented with an array of arrays that looked something along the lines of the following:

```javascript
[[{title: "Obj1"}, {title: "Obj2"}], [{title: "Obj3"}, {title: "Obj4"}], [{title: "Obj5"}, {title: "Obj6"}]]
```

With the desired format to simply look like:

```javascript
[{title: "Obj1"}, {title: "Obj2"}, {title: "Obj3"}, {title: "Obj4"}, {title: "Obj5"}, {title: "Obj6"}]
```

So how can we write code to restructure the first data to look like the second? A simple, or naive, approach could be to iterate through each of the nested arrays, grab each element, and push that to a new array. Something like:

```javascript
let nestedArray = [[{title: "Obj1"}, {title: "Obj2"}], [{title: "Obj3"}, {title: "Obj4"}], [{title: "Obj5"}, {title: "Obj6"}]];
let formattedArray;
nestedArray.forEach(arr => {
  arr.forEach(obj => {
    formattedArray.push(obj);
  });
});
```

This approach is messy, and requires nested looping, which makes the code less readable in my opinion. So let's look at some alternatives.

One alternative that I really like is to use the Array.prototype concat method, in conjunction with the apply method of concat. Before explaining what is going on, let's take a look at what this code could look like:

```javascript
let nestedArray = [[{title: "Obj1"}, {title: "Obj2"}], [{title: "Obj3"}, {title: "Obj4"}], [{title: "Obj5"}, {title: "Obj6"}]];
let formattedArray = Array.prototype.concat.apply([], nestedArray);
```

Or even less characters, shortcutting Array.prototype...
```javascript
let formattedArray = [].concat.apply([], nestedArray);
console.log(formattedArray); // [{title: "Obj1"}, {title: "Obj2"}, {title: "Obj3"}, {title: "Obj4"}, {title: "Obj5"}, {title: "Obj6"}]
```

So what is happening here? Well first, we have to understand the apply method in JavaScript, and specifically how it is being used in conjunction with the array prototype's concat method. The JavaScript apply method (Function.prototype.apply) calls a function with a given "this" value (first argument) and arguments provided as an array (second argument). Note that this second argument (the arguments array) is what we are taking advantage of, and is the primary difference between the Apply and Call methods.

In our code we pass an empty array as the "this" value, or the object that we are calling the concat method on, essentially giving us an empty array to start adding (concatenating) to. We then pass our array of arrays as the second argument. The apply method *unpacks* this array to handoff each array that is one level down as an argument to the concat method. It would be synonymous to the following:

```javascript
let formattedArray = [].concat([{title: "Obj1"}, {title: "Obj2"}], [{title: "Obj3"}, {title: "Obj4"}], [{title: "Obj5"}, {title: "Obj6"}]);
```

If you're familiar with the Array.prototype.concat method, then you'll know that it simply merges, or concatenates, these arrays into one, leaving us with our desired array format:
```javascript
[{title: "Obj1"}, {title: "Obj2"}, {title: "Obj3"}, {title: "Obj4"}, {title: "Obj5"}, {title: "Obj6"}]
```

Note that using the apply method to flatten an array of arrays will only work for nesting one level deep, and you'd likely have to look at a recursive option for an n-level deep nested array.

For more on the JavaScript Apply or Array.concat methods check out the following links:

[Function.prototype.Apply](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)

[Array.prototype.concat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)
