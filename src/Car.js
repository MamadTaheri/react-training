import React, { Component } from "react";

class Car extends Component {
  render() {
    return (
      <>
        <p>
          The model of car is {this.props.model} and it's color is
          {this.props.color}
        </p>
        {this.props.children ? <span>{this.props.children}</span> : <h5>Not</h5>}
      </>
    );
  }
}

export default Car;
