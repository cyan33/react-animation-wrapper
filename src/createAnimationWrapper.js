import React from 'react'
import { css } from 'glamor'

export default function createAnimationWrapper(
  animation,
  { duration = '1s', delay = '0s', iterationCount = '1' } = {}
) {
  return function AnimationWrapper(props) {
    return (
      <div
        {...css({
          animation: `${css.keyframes(animation)} ${duration} ${delay} ${iterationCount}`,
        })}>
        {props.children}
      </div>
    )
  }
}
