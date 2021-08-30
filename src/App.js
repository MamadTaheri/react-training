import React, { Component } from 'react'

import Child from './Child';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isShown: true
      }
    console.log("App constructor")
  }

  componentDidMount() {
    console.log("App componentDidMount");
  }

  componentDidUpdate() {
    console.log("App componentDidUpdate")
  }

  removeHandler = () => {
    this.setState({
      isShown: false
    })
  }

  render() {
    console.log("App render")
    return (
      <div>
        {this.state.isShown && <Child />}
        <button onClick={this.removeHandler}>Remove</button>
      </div>
    )
  }
}

export default App