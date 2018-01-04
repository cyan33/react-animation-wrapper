import React, { Component } from "react";
import { css } from "glamor";
import BounceIn from "./BounceIn";
import Flash from "./Flash";
import Pulse from "./Pulse";

const animations = {
  bounceIn: BounceIn,
  flash: Flash,
  pulse: Pulse
};

const Header = ({ animation }) => {
  let Wrapper = animations[animation];

  const Header = (
    <h1
      {...css({
        textAlign: "center",
        color: "#2196f3",
        fontFamily: "sans-serif"
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

class App extends Component {
  constructor() {
    super();
    this.state = { animation: null };
    this.selectAnimation = null;
  }

  componentDidMount() {}

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
      />
    ];
  }
}

export default App;
