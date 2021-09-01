import React, { useReducer } from 'react';

const initialState = 5;
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

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={() => dispatch("Up")}>Up</button>
            <button onClick={() => dispatch("Reset")}>Reset</button>
            <button onClick={() => dispatch("Down")}>Down</button>
        </div>
    );
};

export default Counter;