import React, { useReducer } from 'react';

const initialState = {
    num1: 0,
    num2: 0
};
const reducer = (state, action) => {
    switch(action.type) {
        case "Up": 
            return { ...state, num1: state.num1 + action.amount }
        case "Down":
            return { ...state, num1: state.num1 - action.amount }
        case "Up2":
            return { ...state, num2: state.num2 + action.amount }
        case "Down2":
            return { ...state, num2: state.num2 - action.amount }
        case "Reset":
            return initialState
        default:
            return state
    }
}

const NewCounter = () => {

    const [number, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <div>
                <h1>Number 1 : {number.num1}</h1>
                <button onClick={() => dispatch({type: "Up", amount: 5})}>Up</button>
                <button onClick={() => dispatch({type: "Reset"})}>Reset</button>
                <button onClick={() => dispatch({type: "Down", amount: 3})}>Down</button>
            </div>
            <div>
               <h1>Number 2 : {number.num2}</h1>
                <button onClick={() => dispatch({type: "Up2", amount: 1})}>Up</button>
                <button onClick={() => dispatch({type: "Reset"})}>Reset</button>
                <button onClick={() => dispatch({type: "Down2", amount: 1})}>Down</button>
            </div>
        </div>
    );
};

export default NewCounter;