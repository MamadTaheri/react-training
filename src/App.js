import React, { Component } from "react";
import Car from "./Car";

class App extends Component {
    number = 10;
  render() {
    return (
      <div>
         <h1>
             My cars:
         </h1>
         <Car model="BMW" color="Red" />
         <Car model="Benz" color="Black" />
         <Car model="Buggati" color="Blue" >I am Super Car</Car>
         {/* <Car model="" color="" /> */}
         {/* <Car model="" color="" /> */}
         {/* <Car model="" color="" /> */}
      </div>
    );
  }
}

export default App;
