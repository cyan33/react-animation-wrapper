# react-animation-wrapper

A declarative set of react components wrapper to bring in animation, like animate.css.

Check the demo page [here](https://cyan33.github.io/react-animation-wrapper/)

![npm version](https://img.shields.io/npm/v/react-animation-wrapper.svg)
![downloads per months](https://img.shields.io/npm/dm/react-animation-wrapper.svg)

## Why Another Animate.css

Compared to animate.css, react-animation-wrapper has many uncomparable advantages:

* 📦 Extremely light-weight: **6kb** (uglified) vs **72kb** (animate.css)
* 🙅 No global CSS variable polution (css in js).
* ✂️ Much More configurable and customizable via JavaScript and React.

## Usage

```sh
npm install --save react-animation-wrapper
```

Write a custom, normal react component:

```js
const Header = () => <h1 style={{ textAlign: 'center' }}>Hello World</h1>
```

Wrap it up with the name of the animation wrapper: **(Check out all the available ones in the [demo page](https://cyan33.github.io/react-animation-wrapper/)!)**

```js
import { BounceIn } from 'react-animation-wrapper'
ReactDOM.render(
  <BounceIn>
    <Header />
  </BounceIn>,
  document.querySelector('.root')
)
```

You are all set!

## FAQ

### Why is my animation acting weird, not as expected

The most possible reason is that you didn't specify the size and alignment of the container box of the content. This leads to the issue where your CONTAINER BOX is being animated, rather than its content. Make sure your content size is the same as its container.

### Why there appears a scroll bar in the middle of the animation

Due to different OS, browser and animations that transform its shape during the animation, it's likely that it goes beyond its container box, which then shows up a scroll bar. A quick fix: add `overflow: hidden` in the container box of the wrapper component.

## Contribution

This project is in a sense very beginner-friendly project for those who want to get some fun of open source. It's well modularized, and the logic of each components is quite easy and similar to each other.

See the issues with the `good first issue` tag and I welcome all kinds of support and can provide some guide.
