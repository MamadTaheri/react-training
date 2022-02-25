import "./index.css";
import React from "react";

export default function App() {
  const buttonText = {id: 1, name: "mamad"};
  
  return (
    <div>
      <label className="label" htmlFor="name">
        Enter name:
      </label>
      <input id="name" type="text" />
      {/* <button style="background-color: blue; color: white">Submit</button> */}
      <button style={{backgroundColor: "blue", color: "white", padding: "0 0.5rem"}}>
        {/* {JSON.stringify(buttonText)} */}
        {buttonText.name}
      </button>
    </div>
  );
}
