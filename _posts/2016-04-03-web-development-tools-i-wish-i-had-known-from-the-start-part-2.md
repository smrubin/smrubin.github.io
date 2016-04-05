---
layout: post
title:  "Web Development Tools I Wish I Had Known From the Start: Part 2"
date:   2016-04-03
author: Sam Rubin
img: web-development-tools-i-wish-i-had-known-from-the-start-part-2.jpg
featured: true
comments: true
---

Part 2 of my favorite web development tools continues. If you haven't checked out [Part 1]({{site.baseurl}}/blog/web-development-tools-i-wish-i-had-known-from-the-start-part-1) yet, be sure to give it a read as it talks about the motivation behind this series. Here are *even more* of tools I use frequently and wish I had known about a lot sooner.

### Boilerplates

Not that Part 1 of this series is more important, but I can't believe I didn't include boilerplates as one of the first tools on this list. After all, boilerplates out-of-the-box already contain a ton of the other tools and plugins in here. A boilerplate is a pre-determined starting point. It is a collection of resources and files that aims to make your job, as a web developer, easier. Over time, many web developers craft their own boilerplates of best practices, reusable resources, and necessary functionality to speed up and improve consistency of development.

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

There are several different version control systems out there, but I highly recommend using [Git](https://git-scm.com/), especially in conjunction with [GitHub](https://github.com/) (the company that provides Git repository hosting). Git is great because it is lightning fast, allows you to work offline (it is decentralizedm; this is huge for anyone who travels), and it is very flexible. I've also used [Subversion](https://subversion.apache.org/) along with [TortoiseSVN](https://tortoisesvn.net/), which isn't nearly as flexible as Git, in my opinion, but is way easier to setup and get running with- I found it to be a lot more intuitive. Either way, version control is a must for any developer so be sure to set this up at the start of your next project.


### In Conclusion

Still, so many more amazing tools and resources are used by developers on a daily basis, and this list doesn't even begin to scratch the surface. As I continue to learn, grow, and discover more of these tools, I will add them to this series and share my thoughts about them. This series is far from over, but for now, I am placing it on pause. Thanks for reading and let me know if you use any tools that you feel *must* be added to this list.