import React, { Component } from 'react'
import { css } from 'glamor'

export default function Pulse(props) {
  const pulse = css.keyframes({
    '0%, 100%': { transform: 'scale(1)' },
    '50%': { transform: 'scale(1.05)' },
  })

  return (
    <div
      {...css({
        animation: `${pulse} 1s`,
      })}>
      {props.children}
    </div>
  )
}
