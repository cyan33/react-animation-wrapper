import React, { Component } from 'react'
import { css } from 'glamor'
import BounceIn from './BounceIn'

class App extends Component {
  render() {
    return (
      <BounceIn>
        <h1 {...css({ 
          textAlign: 'center',
          color: '#2196f3',
          fontFamily: 'sans-serif'
        })}>
          Hello World
        </h1>
      </BounceIn>
    )
  }
}

export default App
