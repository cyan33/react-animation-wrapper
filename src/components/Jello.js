import React from 'react'
import { css } from 'glamor'

export default function Jello(props) {
  const jello = css.keyframes({
    '0%, 11.1%, 100%': { transform: 'none' },
    '22.2%': { transform: 'skewX(-12.5deg) skewY(-12.5deg)' },
    '33.3%': { transform: 'skewX(6.25deg) skewY(6.25deg)' },
    '44.4%': { transform: 'skewX(-3.125deg) skewY(-3.125deg)' },
    '55.5%': { transform: 'skewX(1.5625deg) skewY(1.5625deg)' },
    '66.6%': { transform: 'skewX(-.78125deg) skewY(-.78125deg)' },
    '77.7%': { transform: 'skewX(.390625deg) skewY(.390625deg)' },
    '88.8%': { transform: 'skewX(-.1953125deg) skewY(-.1953125deg)' },
  })

  return (
    <div
      {...css({
        animation: `${jello} 1s`,
      })}>
      {props.children}
    </div>
  )
}
