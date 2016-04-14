---
layout: post
title:  "Web Development Tools I Wish I Had Known From the Start: Part 1"
date:   2016-03-17
author: Sam Rubin
img: web-development-tools-i-wish-i-had-known-from-the-start-part-1.jpg
featured: false
comments: true
keywords: "development, tools, resources, wish, wished, start, developer, web, best, practices, rubin, sam"
description: "I have discovered some amazing tools and resources that enable me to develop at many times the pace. Not only do these resources help me to develop faster, but they also help me to develop better- writing cleaner code, optimizing my web applications, and using industry best practices. It is my goal that this blog post not only serves as a continuallly updated repository for myself, but will also help junior, or even experienced, developers discover some amazing tools."
---

When I built my first website, my toolset included TextEdit along with basic HTML, CSS and PHP. Years later, I have discovered some amazing tools and resources that enable me to develop at many times the pace. Not only do these resources help me to develop faster, but they also help me to develop better- writing cleaner code, optimizing my web applications, and using industry best practices. I don't necessarily use all of these tools for every project that I work on, but I can guarantee you that I at least use a subset of them. It is my goal that this blog post not only serves as a continually updated repository for myself, but will also help junior, or even experienced, developers discover some amazing tools.

### A Real Text Editor

Using a real text editor should be one of the first things that a developer grabs. In fact, if you're not using one of the more popular ones, you really don't know what you're missing out on. And no, I don't mean TextEdit. I mean a text editor that allows you to simultaneously work on multiple files, view your repository, organize and move around your code easily, and allow customization to your individual style of development.

I highly recommend checking out [Sublime Text](https://www.sublimetext.com/) or [Atom](https://atom.io/). Both are great, and although they have subtle differences, in the end, they both help you to accomplish the same thing. [Dennis Gaebel has written a great article](https://web-design-weekly.com/2015/07/30/atom-vs-sublime/) outlining some of the key differences between the two. However, it really just comes down to personal preference.

### Text Editor Plugins

Sublime Text and Atom are great. It's like having your first car, and you can now go faster to wherever you want to go. But hey, we can still soup up our car and make it even better. I'm talking about plugins for these text editors. Plugins help to make these text editors do more, meet specific development needs, and really help you to setup your own preferred development environment. There are hundreds, if not thousands, of open-source plugins for these editors. Below is a list of links to plugins, along with their descriptions, that I have found I can't live without. Note that the plugins listed are from my SublimeText setup, and that they almost all exist for Atom as well.

* [Package Control](https://packagecontrol.io/) - Probably the most necessary one in this list. Package Control easily lets you find and install other plugins (packages) for your text editor. Long gone are days of manually downloading plugins from the Internet. 
* [Emmet](http://emmet.io/) - Simply put, Emmet greatly improves HTML and CSS workflow. But it does so much more than that. Some of my favorite features include the ability to write an HTML skeleton super quickly and the auto-complete and auto-id-class, which enables you to use keyboard shortcuts to add classes and ids to HTML elements.
* [Bracket Highlighter](https://github.com/facelessuser/BracketHighlighter) - Ever get long, nested chunks of code and can no longer tell which specific tag or function you're in? Well, Bracket Highlighter, as you could imagine, literally highlights the beginning and ending tags of an element or code block that you've selected. Very useful in both HTMl and JavaScript when you are nesting pieces of code.
* [Side Bar Enhancements](https://github.com/titoBouzout/SideBarEnhancements) - This plugin provides increased functionality to the sidebar. It essentially provides the functionality of an explorer directory right in your text editor sidebar, allowing you to perform move, delete, add, and open with actions on files.
* [Linter](http://www.sublimelinter.com/en/latest/) - A linter is a program that checks, or proofreads, your code for stylistic and syntax errors. Linters exist for pretty much any language out there that you are using (i.e. jsHint for Javascript). These are great to ensure that your code is tidy, syntactically correct, and following good practices.
* [Color Picker](https://weslly.github.io/ColorPicker/) - Color Picker is awesome when messing around with colors. It easily allows you to choose a color from a palette, or enter RGB or Hex values for a specific color.
* [CSS Comb](https://github.com/csscomb/sublime-csscomb) - CSScomb is a coding style formatter for CSS. CSS can get messy...quickly. CSScomb's goal is to organize your CSS in a logical and readable manner and allows you to choose between several configurations for your project. For example, listing and grouping properties by function or alphabetically.
* [Plain Tasks](https://github.com/aziz/PlainTasks) - Probably my favorite one on here (saving the best for last). PlainTasks is a todo-list plugin. It allows you to generate a todo file, manage a list of tasks for your current project, and mark the tasks with notations, such as priority, status, and due date.

Lastly, while they are not really plugins, a good text editor requires a great theme (how your editor looks and feels). On Sublime Text, I am using the [Flatland Dark theme with Flatland Monokai color scheme](https://github.com/thinkpixellab/flatland). It looks very nice and clean, especially at night when lights are dimmed.

### Package Manager

Odds are, your project will utilize open-source libraries, frameworks, or other programs that will be continuously updated via their respective sources during the lifecycle of your project. Having to navigate to these sources' websites, download the files, and move them into your project repository can quickly become time consuming- especially if you have to update these dependencies from time to time.

A package manager automates this process for you. Package Managers like [npm](https://www.npmjs.com/) and [Bower](http://bower.io/) allow you to easily install and update project dependencies directly from your command line. The other great aspect of these particular package managers, is that they don't dictate a specific build system. These tools simply install, manage, and allow updating of the source files and leave everything else to you.

### Task Runners

As someone who likes to be as efficient as possible, task runners might be the one thing I wished I had known about when starting web development. Task runners automate development tasks for you. And the best part is that there are so many different automation tasks that you would have never even thought of.

Two of the more popular task runners, [Grunt](http://gruntjs.com/) and [Gulp](http://gulpjs.com/), can help you to concatenate and minify source files, optimize images, auto-prefix vendor-specific CSS rules, lint your code, move all of the files to a build/production folder, and so much more. These tools save you countless hours from completing repetitive tasks and allow you to continually build an optimized production environment while focusing on the tasks that truly require your time and energy.

### A Great Learning Source

If you're a self-learner, or at least plan to learn front-end development in an independent manner, it is important to have some resources that do a good job to help you along the way. Below are some of my recommendations and resources that I have found to be invaluable while learning web development

* [Lynda](http://lynda.com/) - Lynda is awesome, and in my opinion one of the best learning tools out there. Their videos are curated by industry experts and have downloadable files to help you follow along step-by-step. It is also great that I can speed up the videos or read the transcript so that I can go at my own pace. Seriously, check it out, they offer a free-trial.

* [FreeCodeCamp](https://www.freecodecamp.com/) - freeCodeCamp is an open-source community that helps you learn to code and work on real-world projects for non-profits. Their lessons cover a lot of the front-end landscape including HTML, CSS, Javascript, jQuery, Bootstrap, JSON APIs and Ajax, the list goes on. If you're looking for a free tool- this is in my opinion the best place to go.

* [Codecademy](https://www.codecademy.com/) - Codecademy is another alternative for quick, interactive lessons in learning to code. What I enjoy the most about Codecademy is the fact that the lessons are quick (great for when I am short on time and want to learn something) and they allow you to code right there in the browser, so no setup is required (great for if you are away from your personal computer).

* [CSS-Tricks](https://css-tricks.com/) - CSS-Tricks is one of my favorite websites out there. It provides some also blog posts, code snippets, and advice from leaders in the industry. And don't let the title fool you, they cover all things web design and development, not just CSS.

* [StackOverflow](http://stackoverflow.com/) - For pretty much everything else. Any time I run into a problem I can't solve or need to ask someone a question, StackOverflow is the first place I turn to. The quick response time and consistently good advice has been one of the reasons I frequent here.

### In Conclusion

This is just a shortlist of some of the amazing tools and resources I use on an almost daily basis. These are opinionated, and there are so many more out there. Check out [Part 2]({{site.baseurl}}/blog/web-development-tools-i-wish-i-had-known-from-the-start-part-1) of this series, where I cover even more development tools that I use and love.