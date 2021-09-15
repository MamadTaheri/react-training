import React, { Component } from "react";
import Counters from "./components/Counters";
import Navbar from "./components/Navbar";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <main className="container">
          <Counters />
        </main>
      </React.Fragment>
    );
  }
}
