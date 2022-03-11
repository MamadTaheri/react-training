import React, { useState } from "react";

const UseReducerComponent01 = () => {
  const [count, setCount] = useState(0);
  const [showText, setShowText] = useState(true);

  return (
    <div className="col-md-6">
      <div className="border border-info rounded p-5">
        <h4> An example for using useReducer hook</h4>
        <h4> with useState </h4>
        <br />
        <h3>{count}</h3>
        <br />
        <button
          className="btn btn-primary"
          onClick={() => {
            setCount(count + 1);
            setShowText(!showText);
          }}
        >
          Click Me Please 😊
        </button>
        <br />
        <br />
        {showText && <p>This is a Paragraph</p>}
      </div>
    </div>
  );
};

export default UseReducerComponent01;
