import React from 'react'
import { css } from 'glamor'

export default function Header({ AnimationWrapper }) {
  return (
    <AnimationWrapper>
      <div
        {...css({
          margin: '125px 0 25px 0',
          fontSize: '50',
          fontWeight: '100',
          textAlign: 'center',
          background: 'linear-gradient(#7dffed, #0059a1)',
          fontFamily: 'sans-serif',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        })}>
        React-Animation
      </div>
    </AnimationWrapper>
  )
}
