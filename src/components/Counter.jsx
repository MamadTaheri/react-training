import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseCounter, decreaseCounter } from "../redux/counter/counterAction"
const Counter = (props) => {
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Counter : {counter}</h1>
            <button 
                className='btn btn-primary' 
                onClick={() => dispatch(increaseCounter())}
            >
                Increase
            </button>
            <button 
                className='btn btn-danger' 
                onClick={() => dispatch(decreaseCounter())}
            >
                Decrease
            </button>
        </div>
    );
};


export default Counter;