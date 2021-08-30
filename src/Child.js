import React, { Component } from 'react'
class Child extends Component {

  constructor(props) {
    super(props);
    this.state = {
      //
    }
    console.log("Child -> constructor")
  }

  componentDidMount() {
    console.log("Child -> componentDidMount");
  }

  componentWillUnmount() {
    console.log("Child -> componentWillUnmount");
  }

  componentDidUpdate() {
    console.log("Child -> componentDidUpdate")
  }

  render() {
    console.log("Child -> render")
    return (
      <div>
        Child
      </div>
    )
  }
}

export default Child