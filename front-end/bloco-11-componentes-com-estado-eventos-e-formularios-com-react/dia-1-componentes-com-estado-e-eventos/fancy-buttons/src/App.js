import React from "react";

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      clickCount1: 0,
      clickCount2: 0,
      clickCount3: 0,
    }
    this.handleClick1 = this.handleClick1.bind(this)
    this.handleClick2 = this.handleClick2.bind(this)
    this.handleClick3 = this.handleClick3.bind(this)
  }
  handleClick1(event) {
    console.log('Click 1')
    if (this.state.clickCount1 % 2 !== 0) {
      event.target.style.backgroundColor = 'green'
      console.log('green')
    } else {
      event.target.style.backgroundColor = 'white'
      console.log('white')
    }
    this.setState((previousState, _props) => ({
      clickCount1: previousState.clickCount1 + 1
    }))
  }
  
  handleClick2() {
    console.log('Click 2')
    this.setState((previousState, _props) => ({
      clickCount2: previousState.clickCount2 + 1
    }))
  }
  
  handleClick3() {
    console.log('Click 3')
    this.setState((previousState, _props) => ({
      clickCount3: previousState.clickCount3 + 1
    }))
  }
  render() {
    return(
      <div>
        <button onClick={this.handleClick1}>{this.state.clickCount1}</button>
        <button onClick={this.handleClick2}>{this.state.clickCount2}</button>
        <button onClick={this.handleClick3}>{this.state.clickCount3}</button>
      </div>
    )
  }
}

export default App