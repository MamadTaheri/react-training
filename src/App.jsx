import React from "react";
import NeshanMapComponent from "./components/NeshanMapComponent";

const App = () => {
  return (
    <div className="container">
      <div className="alert alert-primary" role="alert">
        This is App component
      </div>
      <hr />
      <NeshanMapComponent />
    </div>
  );
};

export default App;
