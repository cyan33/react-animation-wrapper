import React, { Component } from "react";
import { css } from "glamor";

export default function Flash(props) {
  return (
    <div
      {...css({
        animation: "flash 1s"
      })}
    >
      <style>
        {`
          @keyframes flash {
            0%, 50%, 100% {
              opacity: 1;
            }
            25%, 75% {
              opacity: 0;
            }
          }
        `}
      </style>
      {props.children}
    </div>
  );
}
