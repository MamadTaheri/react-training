import React, { useReducer } from 'react';

const initialState = 0;
const reducer = (state, action) => {
    switch(action) {
        case "UP":
            return state + 1;
        case "DOWN":
            return state - 1;
        case "RESET":
            return initialState;
        default:
            return state;
    }
}

const Counter = () => {

    const [number, dispatch] = useReducer(reducer, initialState);

    return (
        <div className='container border border-primary text-center'>
            <h1>Number is: {number}</h1>
            <button onClick={() => dispatch("UP")} className='btn btn-primary'>Up</button>
            <button onClick={() => dispatch("RESET")} className='btn btn-info'>Reset</button>
            <button onClick={() => dispatch("DOWN")} className='btn btn-danger'>Down</button>
        </div>
    );
};

export default Counter;