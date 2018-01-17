import React, { Component } from 'react'
import { css } from 'glamor'
import hljs from 'highlight.js'
import 'highlight.js/styles/github-gist.css'

const headerCode = `const Header = () => (
  <h1 style={{ textAlign: 'center' }}>
    Hello World
  </h1>
)`

const wrapperCode = (animation) => `ReactDOM.render(<${animation}>
  <Header />
</${animation}>, document.querySelector('.root'))`

export default class CodeExample extends Component {
  constructor() {
    super()
    this.codeExample = null
  }

  componentDidMount() {
    hljs.initHighlighting()
  }

  componentDidUpdate() {
    hljs.highlightBlock(this.codeExample)
  }

  render() {
    const { code, animation } = this.props
    return (
      <div
        className="code-example"
        {...css({
          display: 'flex',
          marginTop: '5',
          padding: '8',
          flexDirection: 'row',
          justifyContent: 'center',
          flexWrap: 'wrap',
        })}>
        <pre className="code-example-pre" {...css({ marginRight: '50' })}>
          <code>{headerCode}</code>
        </pre>
        <pre className="code-example-pre">
          <code ref={(codeExample) => (this.codeExample = codeExample)}>
            {wrapperCode(animation)}
          </code>
        </pre>
      </div>
    )
  }
}
