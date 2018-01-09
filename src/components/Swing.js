import React from 'react'
import { css } from 'glamor'

export default function Swing(props) {
  const swing = css.keyframes({
    '20%': { transform: 'rotate(10deg)' },
    '40%': { transform: 'rotate(-10deg)' },
    '60%': { transform: 'rotate(5deg)' },
    '80%': { transform: 'rotate(-5deg)' },
    '100%': { transform: 'rotate(00deg)' },
  })

  return (
    <div
      {...css({
        animation: `${swing} 1s`,
      })}>
      {props.children}
    </div>
  )
}
