import React from 'react'
import { css } from 'glamor'

export default function SelectAnimation({ animations, value, onAnimate }) {
  return (
    <div
      {...css({
        display: 'flex',
        justifyContent: 'center',
      })}>
      <select
        value={value}
        onChange={onAnimate}
        {...css({
          width: '120',
          height: '25',
          fontSize: '14',
          color: '#505050',
        })}>
        {animations.map((a) => <option key={`animation-${a}`}>{a}</option>)}
      </select>
    </div>
  )
}
