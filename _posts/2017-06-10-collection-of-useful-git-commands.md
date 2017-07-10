---
layout: post
title: "A Collection of Useful Git Commands"
date: 2017-06-10
---

Recently, I needed to do a whole bunch of Git cleanup on a legacy project. I discovered a lot of really useful git commands and recipes that I wanted to keep a running list of. The purpose of this post is to keep track of these snippets throughout time and continue to add to this post as I find more commands useful.

# Deleting Multiple Local and Remote Branches

Fortunately, Git branch cleanup is a lot easier if you use a consistent naming format for branching. In this case, the project used mostly feature/ and bugfix/ prefixes to any branches, but they were not deleted after a merge into the main branch.

To delete a regex match of branches locally, run:
```
# Delete all branchs locally, can replace feature with whatever you want
git branch -d `git branch | grep -E 'bugfix.*'`
git branch -d `git branch | grep -E 'feature.*'`
```

The -E flag (option) interprets the pattern as an extended regular expression. You can also replace -d with -D to force the delete of the branch locally.

To delete a regex match of branches remotely, run: 
```
git push origin --delete `git branch -r | grep -Eo 'bugfix.*'`
git push origin --delete `git branch -r | grep -Eo 'feature.*'`
```

The -o flag (option) print only the matched (non-empty) parts of matching lines, with each such part on a separate output line.


# Setting up Git Config Defaults d Aliases in .gitconfig

Its nice to improve your Git config to enable you to do fast work on the command line and set up some defaults for performing Git actions. I've been using [this .gitconfig file](https://github.com/smrubin/dotfiles/blob/master/.gitconfig) for a little while, and wanted to share some of my favorite aliases and defaults.

Here are some aliases I use:
```
[alias]
  tags = tag -l
  branches = branch -a
  remotes = remote -v
  co = checkout
  br = branch
  ci = commit
  st = status
  last = log -1 head
```

If you're not familiar with aliases, they are pretty straight-forward. I can now run `git co master` instead of `git checkout master`.

I also recommend setting a default remote on the master branch for repos:
```
[branch "master"]
  remote = origin
  merge = refs/heads/master
```
This means when you are pushing from the master branch, the upstream remote is set to origin by default.

To take advantage of these snippets, add them to your .gitconfig in your home directory. You can also find a full version of this file and some other useful config and dotfiles [here](https://github.com/smrubin/dotfiles).


More Git stuff to come!!
