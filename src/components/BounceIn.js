import React, { Component } from 'react'
import { css } from 'glamor'

export default function BounceIn(props) {
  return (
    <div {...css({
      animation: 'bounceIn 1.5s'
    })}>
      <style>
        {`
          @keyframes bounceIn {
            0% {
              transform: scale(0.1);
              opacity: 0;
            }
            60% {
              transform: scale(1.2);
              opacity: 1;
            }
            100% {
              transform: scale(1);
            }
          }
        `}
      </style>
      {props.children}
    </div>
  )
}
