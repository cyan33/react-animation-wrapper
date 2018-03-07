import React from 'react'
import { css } from 'glamor'

function addSecondsSuffix(str) {
  const hasSuffix = /.*s$/g
  const isNumber = /^[0-9]+/g

  if (isNumber.test(str)) {
    if (!hasSuffix.test(str)) {
      return `${str}s`
    }
    return str
  }
  return undefined
}

export default function createAnimationWrapper(
  animation,
  { duration = '1s', delay = '0s', iterationCount = '1' } = {}
) {
  return class AnimationWrapper extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        duration: props.duration || duration,
        delay: props.delay || delay,
        iterationCount: props.iterationCount || iterationCount,
      }
    }

    render() {
      const { duration, delay, iterationCount } = this.state

      return (
        <div
          {...css({
            animationName: `${css.keyframes(animation)}`,
            animationDuration: addSecondsSuffix(duration),
            animationDelay: addSecondsSuffix(delay),
            animationIterationCount: iterationCount,
          })}>
          {this.props.children}
        </div>
      )
    }
  }
}
