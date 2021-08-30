import React, { Component } from "react";

import UserC from "./UserC";
import UserF from "./UserF";
import "./App.css"

class App extends Component {  

    header = {color:"blue", fontSize:"2rem", border:"1px solid blue"};
  
  render() {
    return (
      <div>
          <h1 style={{color:"red", fontSize:"2rem", border:"1px solid red"}}>Mohammad</h1>
          <h1 style={this.header}>Mohammad</h1>
          <h1 className="header">Mohammad</h1>
          <UserC LastName ="Taheri" career="Programmer" />
          <UserF name="Milad" age="24"/>
      </div>
    );
  }
}

export default App;
