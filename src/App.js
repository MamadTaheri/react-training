import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Benz",
      speed: 250,
    };
  }

  changeHandler = () => {
      const carName = this.state.name == "Benz" ? "BMW" : "Benz"
      const carSpeed = this.state.speed == 250 ? 300 : 250
      this.setState({
          name: carName,
          speed: carSpeed
      })
  }

  render() {
    return (
      <div>
        <h1>My cars:</h1>
        <p>
          My first car is {this.state.name} and it's top speed is{" "}
          {this.state.speed}
        </p>
        <button onClick={this.changeHandler}>Change</button>
      </div>
    );
  }
}

export default App;
