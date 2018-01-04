import React, { Component } from "react";
import { css } from "glamor";

export default function Pulse(props) {
  return (
    <div
      {...css({
        animation: "pulse 1s"
      })}
    >
      <style>
        {`
          @keyframes pulse {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.05);
            }
          }
        `}
      </style>
      {props.children}
    </div>
  );
}
