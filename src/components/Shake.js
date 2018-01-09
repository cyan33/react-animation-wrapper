import React from 'react'
import { css } from 'glamor'

export default function Shake(props) {
  const shake = css.keyframes({
    '0%, 50%, 100%': { transform: 'translateX(0)' },
    '25%': { transform: 'translateX(-10px)' },
    '75%': { transform: 'translateX(10px)' },
  })

  return (
    <div
      {...css({
        animation: `${shake} 0.2s 4`,
      })}>
      {props.children}
    </div>
  )
}
