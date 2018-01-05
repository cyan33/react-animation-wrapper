import React, { Component } from "react";
import { css } from "glamor";
import hljs from "highlight.js";
import "highlight.js/styles/atelier-lakeside-light.css";

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

const SelectAnimation = ({ value, onAnimate }) => (
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
      {Object.keys(animations).map(a => (
        <option key={`animation-${a}`}>{a}</option>
      ))}
    </select>
  </div>
);

class CodeExample extends Component {
  constructor() {
    super();
    this.codeExample = null;
  }

  componentDidMount() {
    hljs.initHighlighting();
  }

  componentDidUpdate() {
    hljs.highlightBlock(this.codeExample);
  }

  render() {
    const { code, animation } = this.props;
    return (
      <div
        className="code-example javascript"
        {...css({
          display: "flex",
          padding: "8",
          flexDirection: "row"
        })}
      >
        <pre {...css({ marginLeft: "75" })}>
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
        <pre>
          <code ref={codeExample => (this.codeExample = codeExample)}>
            {`
                ReactDOM.render(<${animation}>
                  <Header />
                </${animation}>, document.querySelector('.root'))
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
  }

  onAnimate = e => {
    this.setState({
      animation: e.target.value
    });
  };

  render() {
    const { animation } = this.state;
    return [
      <Header key="header" animation={animation} />,
      <SelectAnimation
        key="select"
        value={animation}
        onAnimate={this.onAnimate}
      />,
      <CodeExample key="code" animation={animation} />
    ];
  }
}

export default App;
