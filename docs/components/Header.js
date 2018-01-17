import React from 'react'
import { css } from 'glamor'

export default function Header({ AnimationWrapper }) {
  const colorTransition = css.keyframes({
    '0%': { filter: 'hue-rotate(0deg)' },
    '100%': { filter: 'hue-rotate(360deg)' },
  })
  return (
    <AnimationWrapper>
      <div
        {...css({
          margin: '125px 0 25px 0',
          fontSize: '50',
          fontWeight: '200',
          textAlign: 'center',
          background: 'linear-gradient(#7dffed, #0059a1)',
          fontFamily:
            '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif',
          letterSpacing: '2',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          animation: `${colorTransition} 60s infinite`,
        })}>
        React-Animation
      </div>
    </AnimationWrapper>
  )
}
