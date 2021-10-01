import React, { useState } from "react";

const Counter = () => {
  const [number, setNumber] = useState(0);

  const increaseHandler = () => {
    setNumber(number + 1)
  }

  const decreaseHandler = () => {
    setNumber(number - 1)
  }

  return (
    <div>
      <div className="">
        <h1 className="">Number is : {number}</h1>
        <button
          style={{ borderRadius: "12px", padding: "8px", margin: "5px" }}
          onClick={ increaseHandler}
        >
          Increase Number
        </button>
        <button
          style={{ borderRadius: "12px", padding: "8px", margin: "5px" }}
          onClick={decreaseHandler}
        >
          Decrease Number
        </button>
      </div>
    </div>
  );
};

export default Counter;
