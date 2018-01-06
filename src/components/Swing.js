import React from 'react'
import { css } from 'glamor'

export default function Swing(props) {
  return (
    <div
      {...css({
        animation: 'swing 1s',
      })}>
      <style>
        {`
          @keyframes swing {
            20% {
              transform: rotate(10deg);
            }
            40% {
              transform: rotate(-10deg);
            }
            60% {
              transform: rotate(5deg);
            }
            80% {
              transform: rotate(-5deg);
            }
            100% {
              transform: rotate(0deg);
            }
          }
        `}
      </style>
      {props.children}
    </div>
  )
}
