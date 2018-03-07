import React, { Component } from 'react'
import { css } from 'glamor'

import {
  BounceIn,
  Flash,
  Pulse,
  Swing,
  Shake,
  RubberBand,
  Jello,
  Wobble,
  FadeIn,
  Tada,
  Bounce,
  Flip,
  ZoomIn,
  ZoomOut,
  RotateIn,
  JackInTheBox,
  RollIn,
} from '../../src'
import Header from './Header'
import CodeExample from './CodeExample'
import SelectAnimation from './SelectAnimation'

const animations = {
  BounceIn,
  Flash,
  Pulse,
  Swing,
  Shake,
  RubberBand,
  Jello,
  Wobble,
  FadeIn,
  Tada,
  Bounce,
  Flip,
  ZoomIn,
  ZoomOut,
  RotateIn,
  JackInTheBox,
  RollIn,
}

class App extends Component {
  constructor() {
    super()
    this.state = { animation: Object.keys(animations)[0] }
  }

  onAnimate = (e) => {
    this.setState({
      animation: e.target.value,
    })
  }

  render() {
    const { animation } = this.state
    return [
      <a
        href="https://github.com/cyan33/react-animation"
        key="fork"
        {...css({
          position: 'fixed',
          top: '0',
          right: '0',
          '@media screen and (max-width: 450px)': {
            display: 'none',
          },
        })}>
        <img
          width="120"
          src="https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67"
          alt="Fork me on GitHub"
          data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png"
        />
      </a>,
      <div key="body">
        <Header AnimationWrapper={animations[animation]} />
        <SelectAnimation
          animations={Object.keys(animations)}
          value={animation}
          onAnimate={this.onAnimate}
        />
        <CodeExample animation={animation} />
      </div>,
    ]
  }
}

export default App
