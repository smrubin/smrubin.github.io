---
layout: post
title: "Web Development Tools I Wish I Had Known from the Start"
date: 2016-03-17
---

> Heads Up! This was my first blog post written in early 2016, so some of the tools might be outdated. However, I am leaving it here because I still believe it holds a lot of value in certain areas.

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

### Boilerplates

A boilerplate is a pre-determined starting point. It is a collection of resources and files that aims to make your job, as a web developer, easier. Over time, many web developers craft their own boilerplates of best practices, reusable resources, and necessary functionality to speed up and improve consistency of development.

Now, as a beginner in web development, you won't have a clue which files are needed. But no worries, there already exist great boilerplates that are open-source for everyone to use. Two of my favorites are [HTML5 Boilerplate](https://html5boilerplate.com/) and [Web Starter Kit](https://developers.google.com/web/tools/starter-kit/?hl=en). Personally, I've found HTML5 Boilerplate to be great. It's very easy to get started and has simple documentation to inform you of all of the different files packaged into it. If you're starting your first real project, definitely check these out. They will save you a ton of time and ensure that you follow many web best practices.

### BrowserSync

[BrowserSync](https://www.browsersync.io/) might be the one tool that amazes people the most when I show it to them. Well, it at least gets a lot of "oohs and ahhs." As a web developer with many screens, devices, and browsers to test, it becomes burdensome to view the layout, styling, and consistency across all of these different viewing permutations. BrowserSync solves this problem by watching for changes in your repository and automatically updating the browser(s) as you save your changes. This functionality is extremely useful when doing minor styling tweaks.

But wait, there's more! Your scroll, click and form actions are mirrored across every browser and device that you're running. What this means is that as I test with multiple browsers open across my screens, if I begin to fill out a form, scroll, and submit it in one browser, it does this in all of my other browsers as well. Now I can easily look at each browser (even better if they're on different monitors or devices) and assure that my styling and functionality is all working as expected. When it comes time for testing, BrowserSync is a must and will only become more important in the future as more browsers, devices, and screen resolutions come to market.

### Autoprefixer

I am an advocate of writing pure CSS. This means I don't like to, nor do I usually, write vendor prefixes when I write CSS. But let me take a step back. Browsers (Safari, Chrome, IE, etc.) sometimes require a prefix for newer or nonstandard CSS properties. This is especially common when developing for older or legacy browsers versions and using newer CSS properties. We can still use this CSS properties, but we need to add a prefix to help tell the browser what to do with our CSS. As you can imagine, this process can become painful when developing for many browser versions and trying to remember which CSS properties need prefixes.

[Autoprefixer](https://github.com/postcss/autoprefixer) is tool that will take your pure, non-prefixed CSS and add the correct prefixes to them based on current web standards. What this means is that you only have to write pure CSS, and when you compile with autoprefixer, all of the necessary browser prefixes will be added. Well, how does Autoprefixer know which prefixes are needed? You as a developer specify which browsers and versions you want Autoprefixer to account for (e.g. last two versions of all browsers, or all browsers with greater than 5% global use). Autoprefixer then uses rules, which you can view on [CanIUse](http://caniuse.com/), to take care of the rest. Ultimately, Autoprefixer makes writing CSS easier and ensures cross-browser functionality.

### Browserify

When writing web applications, you're going to have a lot of code. At first, it might seem like a good idea to start putting this all into one big Javascript file, but this gets messy quickly and makes it more difficult for you to manage. A better approach would be to use a Modular Design pattern. If you're unfamiliar with modular design, check out [this post by Todd Motto](https://toddmotto.com/mastering-the-module-pattern/) for a great explanation.

To help you achieve this modular design, [Browserify](http://browserify.org/) allows you to "require" your different modules in the browser. While this is a common practice in Node, it isn't out-of-the-box with front end Javascript, but with Browserify it becomes possible again. With Browserify, it now becomes super easy to logically and semantically separate your frameworks, libraries, and custom Javascript code and then bundle it up together again, with the correct dependencies, for production.

### Version Control

Version Control for your code is like a backup for your computer- it's something that just needs to be done. But hey, at least version control is easier to setup and maintain than a backup. Version control records changes to your repository so that you can revert back to any archive when you want. It allows you to revert file(s) back to a previous state, compare changes over time, examine who was the last to modify code, and more. Basically, and similar to a computer backup, version control allows you to easily reconcile a situation or code that you've messed up.

There are several different version control systems out there, but I highly recommend using [Git](https://git-scm.com/), especially in conjunction with [GitHub](https://github.com/) (the company that provides Git repository hosting). Git is great because it is lightning fast, allows you to work offline (it is decentralized; this is huge for anyone who travels), and it is very flexible. I've also used [Subversion](https://subversion.apache.org/) along with [TortoiseSVN](https://tortoisesvn.net/), which isn't nearly as flexible as Git, in my opinion, but is way easier to setup and get running with- I found it to be a lot more intuitive. Either way, version control is a must for any developer so be sure to set this up at the start of your next project.

### In Conclusion

Still, so many more amazing tools and resources are used by developers on a daily basis, and this list doesn't even begin to scratch the surface. As I continue to learn, grow, and discover more of these tools, I will add them to this series and share my thoughts about them. This series is far from over, but for now, I am placing it on pause. Thanks for reading and let me know if you use any tools that you feel *must* be added to this list.
