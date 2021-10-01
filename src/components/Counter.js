import React, {useReducer} from 'react';

const initialState = 0

const reducer = (state, action) => {
    switch (action) {
        case "UP":
            return state + 1
        case "DOWN":
            return state - 1
        case "RESET":
            return initialState
        default: 
        return state
    }
}

const Counter = () => {

    const [number, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <button onClick={() => dispatch("UP")}>Up</button>
            <button onClick={() => dispatch("RESET")}>Reset</button>
            <button onClick={() => dispatch("DOWN")}>Down</button>
            <h1 className="">{number}</h1>
        </div>
    );
};

export default Counter;