import React, { Component } from "react";

import UserC from "./UserC";
import UserF from "./UserF";

class App extends Component {  
  
  render() {
    return (
      <div>
          <UserC LastName ="Taheri" career="Programmer" />
          <UserF name="Milad" age="24"/>
      </div>
    );
  }
}

export default App;
