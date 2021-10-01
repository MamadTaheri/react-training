import React, { useReducer } from "react";

const initialState = {
  num1: 0,
  num2: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UP":
      return { ...state, num1: state.num1 + action.amount };
    case "DOWN":
      return { ...state, num1: state.num1 - action.amount };
    case "UP2":
      return { ...state, num2: state.num2 + action.amount };
    case "DOWN2":
      return { ...state, num2: state.num2 - action.amount };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

const NewCounter = () => {
  const [number, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div className="">
        <h1>number 1 : {number.num1}</h1>
        <button onClick={() => dispatch({ type: "UP", amount: 5 })}>Up</button>
        <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
        <button onClick={() => dispatch({ type: "DOWN", amount: 3 })}>
          Down{" "}
        </button>
      </div>
      <div className="">
        <h1>number 2 : {number.num2}</h1>
        <button onClick={() => dispatch({ type: "UP2", amount: 1 })}>Up</button>
        <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
        <button onClick={() => dispatch({ type: "DOWN2", amount: 1 })}>
          Down{" "}
        </button>
      </div>
    </div>
  );
};

export default NewCounter;
