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
