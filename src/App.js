import React, { Component } from "react";

class App extends Component {
    number = 10;
  render() {
    return (
      <>
        <p>Multiple: 4*5 </p>
        <p>Multiple: {4 * 5} </p>
        <p>Multiple:  Math.ceil(Math.random()*1000)  </p>
        <p>Multiple:  {Math.ceil(Math.random()*1000)}  </p>
        <p>{this.number} </p>
        {console.log(this.number)}
      </>
    );
  }
}

export default App;
