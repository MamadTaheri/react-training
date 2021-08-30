import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
       number : 0,
    };
  } 

  upOne = () => {
    //   this.setState({
    //       number: this.state.number + 1,
    //   }, () => {console.log(`new number is : ${this.state.number}`)})
    //   console.log(this.state.number)

    this.setState((prevState) => ({
        number: prevState.number + 1,
    }))
  }

  upThree = () => {
      this.upOne();
      this.upOne();
      this.upOne();
  }

  render() {
    return (
      <div>
         <h1>{this.state.number}</h1>
         <button onClick={this.upThree}>UP 3</button>
      </div>
    );
  }
}

export default App;
