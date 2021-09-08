import React from 'react';
import { increase, decrease } from '../redux/counter/counterAction'; 
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {

    const counter = useSelector(state => state.counterStateObject.counter);
    const dispatch = useDispatch();

    return (
        <div style={{border: "1px solid red", padding: "10px"}}>
            <h1>Counter - {counter}</h1>
            <button onClick={() => dispatch(increase())}>Increase</button>
            <button onClick={() => dispatch(decrease())}>Decrease</button>
        </div>
    );
}; 

export default Counter ;