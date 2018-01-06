import React from 'react'
import { css } from 'glamor'

export default function Shake(props) {
  return (
    <div
      {...css({
        animation: 'shake 0.2s 4',
      })}>
      <style>
        {`
          @keyframes shake {
            0%, 50%, 100% {
              transform: translateX(0);
            }
            25% {
              transform: translateX(-10px);
            }
            75% {
              transform: translateX(10px);
            }
          }
        `}
      </style>
      {props.children}
    </div>
  )
}
