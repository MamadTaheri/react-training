import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseCounter } from "../redux/counter/counterAction"
const Counter = (props) => {
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Counter - {counter}</h1>
            <button className='btn btn-primary' onClick={() => dispatch(increaseCounter())}>Increase</button>
        </div>
    );
};


export default Counter;