import React, { Component } from "react";
import { css } from "glamor";
import hljs from "highlight.js";
import "highlight.js/styles/paraiso-dark.css";

import BounceIn from "./BounceIn";
import Flash from "./Flash";
import Pulse from "./Pulse";

const animations = {
  BounceIn,
  Flash,
  Pulse
};

const Header = ({ animation }) => {
  let Wrapper = animations[animation];

  const Header = (
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
  );

  return animation ? <Wrapper>{Header}</Wrapper> : Header;
};

class SelectAnimation extends Component {
  constructor() {
    super();
    this.select = null;
  }

  getVal = () => {
    return this.select.value;
  };

  render() {
    const { onAnimate } = this.props;
    return (
      <div
        {...css({
          display: "flex",
          justifyContent: "center"
        })}
      >
        <select
          ref={select => (this.select = select)}
          {...css({ marginRight: "10" })}
        >
          {Object.keys(animations).map(a => (
            <option key={`animation-${a}`}>{a}</option>
          ))}
        </select>
        <button
          onClick={onAnimate}
          {...css({
            borderRadius: "3",
            cursor: "pointer"
          })}
        >
          Animate it
        </button>
      </div>
    );
  }
}

class CodeExample extends Component {
  constructor() {
    super();
    this.wrapperCode = null;
  }

  // componentDidMount() {
  //   hljs.initHighlighting()
  // }

  // componentDidUpdate() {
  //   hljs.highlightBlock(this.wrapperCode)
  // }

  render() {
    const { code, animation } = this.props;
    console.log("render");
    return (
      <div
        className="code-example"
        {...css({
          display: "flex",
          flexDirection: "row",
          justifyContent: "center"
        })}
      >
        <pre {...css({ width: "450" })}>
          <code>
            {`
              const Header = () => (
                <h1 style={{ textAlign: 'center' }}>
                  Hello World
                </h1>
              )
            `}
          </code>
        </pre>
        <pre
          ref={wrapperCode => (this.wrapperCode = wrapperCode)}
          {...css({ width: "450" })}
        >
          <code>
            {`
                <${animation}>
                  <Header />
                </${animation}>
            `}
          </code>
        </pre>
      </div>
    );
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = { animation: Object.keys(animations)[0] };
    this.selectAnimation = null;
  }

  onAnimate = () => {
    this.setState(() => ({
      animation: this.selectAnimation.getVal()
    }));
  };

  render() {
    const { animation } = this.state;
    return [
      <Header key="header" animation={animation} />,
      <SelectAnimation
        ref={selectAnimation => (this.selectAnimation = selectAnimation)}
        key="select"
        onAnimate={this.onAnimate}
      />,
      <CodeExample key="code" animation={animation} />
    ];
  }
}

export default App;
