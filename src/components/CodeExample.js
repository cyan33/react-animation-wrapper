import React, { Component } from "react";
import { css } from "glamor";
import hljs from "highlight.js";
import "highlight.js/styles/atelier-lakeside-light.css";

export default class CodeExample extends Component {
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
