import React, { Component } from "react";
import ReactDOM from "react-dom";

const Child = () => {
  return ReactDOM.createPortal(
    <div>
      <h1>Mamad</h1>
    </div>,
    document.getElementById("child-root")
  );
};

export default Child;
