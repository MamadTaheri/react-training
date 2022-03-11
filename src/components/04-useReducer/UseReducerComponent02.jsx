import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1
      };
    case "TOGGLE_SHOW_TEXT":
      return {
        ...state,
        showText: !state.showText
      };
    default:
      return state;
  }
}

const UseReducerComponent02 = () => {
  const [state, dispatch] = useReducer(reducer, {count: 0, showText: true})


  return (
    <div className="col-md-6">
      <div className="border border-info rounded p-5">
      <h4> An example for using useReducer hook</h4>
        <h4> with useReducer </h4>
        <br />
        <h3>{state.count}</h3>
        <br />
        <button
          className="btn btn-primary"
          onClick={() => { 
            dispatch({type: "INCREMENT"});
            dispatch({type: "TOGGLE_SHOW_TEXT"});
          }}
        >
          Click Me Please 😊
        </button>
        <br />
        <br />
        {state.showText && <p>This is a Paragraph</p>}
      </div>
    </div>
  );
};

export default UseReducerComponent02;
