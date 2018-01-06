import React from "react";
import { css } from "glamor";

export default function Header({ AnimationWrapper }) {
  return (
    <AnimationWrapper>
      <h1
        {...css({
          textAlign: "center",
          background: "linear-gradient(#7dffed, #0059a1)",
          fontFamily: "sans-serif",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent"
        })}
      >
        React-Animation
      </h1>
    </AnimationWrapper>
  );
}
