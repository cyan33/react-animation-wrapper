import React from "react";
import { css } from "glamor";

export default function SelectAnimation({ animations, value, onAnimate }) {
  return (
    <div
      {...css({
        display: "flex",
        justifyContent: "center"
      })}
    >
      <select
        value={value}
        onChange={onAnimate}
        {...css({ width: "100", height: "25" })}
      >
        {animations.map(a => <option key={`animation-${a}`}>{a}</option>)}
      </select>
    </div>
  );
}
