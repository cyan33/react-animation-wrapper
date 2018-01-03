import React, { Component } from 'react'
import { css } from 'glamor'
import BounceIn from './BounceIn'
import Flash from './Flash'

const animations = {
  bounceIn: BounceIn,
  flash: Flash,
}

const Header = ({ animation }) => {
  let Wrapper = animations[animation]
  return (
    <Wrapper>
      <h1 {...css({ 
        textAlign: 'center',
        color: '#2196f3',
        fontFamily: 'sans-serif'
      })}>
        React-Animation
      </h1>
    </Wrapper>
  )
}

const SelectAnimation = ({ onSelect, value }) => (
  <div {...css({
    display: 'flex',
    justifyContent: 'center'
  })}>
    <select onChange={onSelect} value={value}>
      {Object.keys(animations).map(a => (
        <option key={`animation-${a}`}>
          {a}
        </option>
      ))}
    </select>
  </div>
)

class App extends Component {
  constructor() {
    super()
    this.state = { animation: Object.keys(animations)[0] }
  }

  onSelect = (e) => {
    this.setState({ animation: e.target.value })
  }

  render() {
    const { animation } = this.state
    return (
      [
        <Header 
          key="header"
          animation={animation} 
        />,
        <SelectAnimation 
          key="select"
          onSelect={this.onSelect} 
          value={animation} 
        />,
      ]
    )
  }
}

export default App
