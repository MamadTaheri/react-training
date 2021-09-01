import React, { useReducer } from 'react';

const initialState = 0;
const reducer = (state, action) => {
    switch(action) {
        case "Up": 
            return state + 1
        case "Down":
            return state - 1
        case "Reset":
            return initialState
        default:
            return state
    }
}

const Counter = () => {

    const [number, dispatch] = useReducer(reducer, initialState)
    const [number2, dispatch2] = useReducer(reducer,initialState)

    return (
         <>
            <div>
                <h1>{number}</h1>
                <button onClick={() => dispatch("Up")}>Up</button>
                <button onClick={() => dispatch("Reset")}>Reset</button>
                <button onClick={() => dispatch("Down")}>Down</button>
            </div>
                <div>
                <h1>{number2}</h1>
                <button onClick={() => dispatch2("Up")}>Up</button>
                <button onClick={() => dispatch2("Reset")}>Reset</button>
                <button onClick={() => dispatch2("Down")}>Down</button>
            </div>
          </>
    );
};

export default Counter;