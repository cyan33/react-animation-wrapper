import React, { Component } from 'react'
import { css } from 'glamor'

export default function Flash(props) {
  const flash = css.keyframes({
    '0%, 50%, 100%': { opacity: '1' },
    '25%, 75%': { opacity: '0' },
  })
  return (
    <div
      {...css({
        animation: `${flash} 1s`,
      })}>
      {props.children}
    </div>
  )
}
