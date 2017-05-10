---
layout: post
title: "JavaScript Date Formatting with Leading Zeroes"
date: 2017-04-03
---

If you've ever messed around with JavaScript Dates, especially formatting, you know that it is not the simplest thing. Recently, I was looking to log the date and time in a custom format. JavaScript has a lot of awesome Date methods out of the box, but they lack the ability to quickly modify the format to your specific needs.

Here are some of the useful Date methods in JavaScript that you are probably most familiar with:

```
let d = new Date("October 13, 2016 11:13:03");
console.log(d.getDate()); // 13
console.log(d.getMonth()); // 9
console.log(d.getFullYear()); // 2016
console.log(d.getHours()); // 11
console.log(d.getMinutes()); // 13
console.log(d.getSeconds()); // 3
```

With these six methods, you virtually have access to the Month, Day, Year, Hour, Minute, and Second for a specific date-time, which means you can now manipulate or concatenate these however you want. However, if you take a closer look at the outputs from above, note a couple of things.

1. The month is returned from 0 - 11. Meaning our example of October actually returns 9, whereas you might expect 10.
2. The methods getMonth, getDate, getHours, getMinutes, and getSeconds will all return a Number without a leading zero by default. In our example, we can see this with getSeconds, where the output is 3, and not 03.

The reason I bring this up is because I frequently am requested to include leading zeroes for all of the date and time variables. Suppose we want the output: MMDDYYYY_HHMMSS. Your first thought may be to string together a solution like:

```
let d = new Date("February 3, 2016 04:08:03");
let dDate = [d.getMonth() + 1, d.getDate(), d.getFullYear()].join('');
let dTime = [d.getHours(), d.getMinutes(), d.getSeconds()].join('');
let formattedDate = \`${dDate}_${dTime}\`;
```

This solution will validate, and for our example will output `232016_483`. You can immediately see why leading zeroes for date formatting (especially when no other special characters are present) become important.

So how can we include leading zeroes? A simple approach might be to use if or ternary statements to check if the returned number is less than 10.

```
let d = new Date("October 13, 2016 11:13:03");
let min = d.getMinutes();
let sec = d.getSeconds();
min = min < 10 ? '0' + min : min;
if (sec < 10) { sec = '0' + sec; }
```

This solution works, but I find that it starts to become a lot of if or ternary statements quickly. Another neat solution is to automatically concatenate a leading zero to each date-time variable (except year) and then take advantage of the String.prototype.slice() method to grab only the last two characters of the string. The solution could look something like:

```
let d = new Date("February 3, 2016 04:08:03");
let dDate = [('0' + (d.getMonth() + 1)).slice(-2), ('0' + d.getDate()).slice(-2), d.getFullYear()].join('');
let dTime = [('0' + d.getHours()).slice(-2), ('0' + d.getMinutes()).slice(-2), ('0' + d.getSeconds()).slice(-2)].join('');
let formattedDate = \`${dDate}_${dTime}\`;
```

So what's happening here? The slice method extracts part of a string and returns these extracted parts into a new string and takes a beginning index as its first argument. If the passed beginning index is negative, it is treated as the string length + the beginning index, essentially slicing (or substringing) from the end of the string forward, but returning the string in the left-to-right order.

So putting it all together... If we look at `('0' + d.getDate()).slice(-2)`, we first concatenate 0 to the date, returning '03', and then slice the string counting back two characters from the end, leaving us with '03'. Suppose our getDate() method returned 13 as the current day. We'd concatenate a 0 to give us '013', and then slice the string to grab the last two characters, 13, essentially eliminating the 0 concatenation we performed. Personally, I prefer this strategy if you are familiar with the slice method, as it reduces if statements and produces cleaner code.
