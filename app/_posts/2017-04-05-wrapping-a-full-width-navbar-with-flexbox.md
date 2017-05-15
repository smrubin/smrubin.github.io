---
layout: post
title: "Wrapping a Full Width Navbar with Flexbox"
date: 2017-04-05
---

The other day I was working with a designer and came across an interesting CSS challenge: designing a navbar with the following:
* Upto n items in navigation that will wrap on different media breakpoints
* The entire navbar will have an underline that spans the full width of its container, and if the navbar wraps, every row of the navbar will have this underline that spans the full width (even if the last row only has one item)
* On hover, the navbar underline should change color for that particular element

So let's jump in. The trickiest part of this problem is getting the navbar to continue to span the full width on the last row (especially when there is just one element on that row).  This can be best achieved using flexbox and flex-grow on the last element, which we will target using pseudo-selectors. However, we have to make sure that the last element on hover, doesn't underline the entire remaining width, and instead just underlines that inline element.

We have two ways to accomplish this, and I'll walk through both. For the first, we will essentially wrap a div in each of our li elements, allowing us to flex-grow the li, and place the hover on the div.

First, let's skeleton the HTML (notice the div wrapped inside the li).

```html
<ul class="container">
  <li><div>Item 1</div></li>
  <li><div>Item 2</div></li>
  <li><div>Item 3</div></li>
  <li><div>Item 4</div></li>
  <li><div>Item 5</div></li>
  <li><div>Item 6</div></li>
  <li><div>Item 7</div></li>
  <li><div>Item 8</div></li>
  <li><div>Item 9</div></li>
  <li><div>Item 10</div></li>
  <li><div>Item 11</div></li>
  <li><div>Item 12</div></li>
</ul>
```

Now let's style it, using SASS:
```css
.container {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  list-style: none;

  li {
    border-bottom: 2px solid gray;
    flex-grow: 1;

    &:last-of-type {
      flex-grow: 1000;
    }
  }

  div {
    border-bottom: 2px solid transparent;
    padding: 10px;
    display: inline-block;

    &:hover {
      border-bottom: 2px solid blue;
    }
  }
}
```

This is a working solution and takes advantage of the awesome powers of flexbox, and specifically flex-grow, to handle that continuing underline (bottom border). Just to quickly cover what's going on here, we set that bottom border underline on every li element and make the last li in the ul expand its width to take up the remaining width of the container (flex-grow: 1000). Because this li element now takes up the entire remaining width, we can't place a hover selector on it, but rather have to place it on the wrapped div.

Although I liked this solution, I couldn't help but think there was a better solution out there. I sought to create more semantic HTML not necessitating a need for the div elements and eliminating the need for the margin offset. So let's take a look at Iteration #2 where we take advantage of the :after pseudo-element.

Skeleton the HTML:
```html
<ul class="container">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
  <li>Item 4</li>
  <li>Item 5</li>
  <li>Item 6</li>
  <li>Item 7</li>
  <li>Item 8</li>
  <li>Item 9</li>
  <li>Item 10</li>
  <li>Item 11</li>
  <li>Item 12</li>
</ul>
```

And the SASS styling:
```css
.container {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  list-style: none;
  justify-content: space-between;

  &:after {
    content: '';
    flex: 1000 0 auto;
    border-bottom: 2px solid gray;
  }

  li {
    border-bottom: 2px solid gray;
    flex-grow: 1;
    padding: 10px;
    display: inline-block;
    flex: 1 0 auto;
    margin: 0;

    &:hover {
      border-bottom: 2px solid blue;
    }
  }
}
```

As mentioned before, I like this solution a lot more as it doesn't mandate the use of div elements and doesn't force us to offset a margin for the underline. The main difference between this solution and the last is instead of allowing the last element to grow with flex-grow, we instead add an pseudo-element after to the container, now making this pseduo-element the last-child. Because of this we can get the after element to expand the full width on the last row. Finally, we only apply the hover selector to our li elements, and not the after pseudo-element, meaning if a user were to hover in the remaining underlined empty space, nothing would happen (which is what we want)!

Finally, here's a JSFiddle of both of these solutions to compare and play around with:
* [Solution #1: The Wrapped Div Solution]()
* [SOlution #2: The Pseduo-Element :after Solution]()

Flexbox and pseudo-elements make for a lot of fun with playing with different layouts. Here's some more on them:
* [Pseduo-element :after]()
* [Flexbox]()
* [CSS-Tricks Ultimate Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
