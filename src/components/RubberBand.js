import React from 'react'
import { css } from 'glamor'

export default function RubberBand(props) {
  const rubberBand = css.keyframes({
    '0%, 100%': { transform: 'scaleX(1)' },
    '30%': { transform: 'scale(1.25, .75)' },
    '40%': { transform: 'scale(.75, 1.25)' },
    '50%': { transform: 'scale(1.15, .85)' },
    '65%': { transform: 'scale(.95, 1.05)' },
    '75%': { transform: 'scale(1.05, .95)' },
  })

  return (
    <div
      {...css({
        animation: `${rubberBand} 1s`,
      })}>
      {props.children}
    </div>
  )
}
