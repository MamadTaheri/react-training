import React, { Component } from "react";
import Hi from "./Hi";

class App extends Component {
  render() {
    return (
      <>
        <div className="container">
          <h1>Mamad Taheri</h1>
          <Hi />
        </div>
        <Hi />
        <p>Hello world</p>
        <Hi />
      </>
    );
  }
}

export default App;
