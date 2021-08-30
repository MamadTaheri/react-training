import React, { Component } from "react";

class ClassEvent extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
      option: "option3",
    };
  }
 
  render() {
    const {text, option} = this.state;
    return ( 
       
      <button onClick={this.props.sayHi}>Submit</button>

    );
  }
}

export default ClassEvent;
