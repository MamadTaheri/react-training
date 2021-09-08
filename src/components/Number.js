import React from 'react';
import { increaseNumber, decreaseNumber } from '../redux/number/numberAction'; 
import { useSelector, useDispatch } from 'react-redux';

const Number = () => {

    const number = useSelector(state => state.numberStateObject.number);
    const dispatch = useDispatch();

    return (
        <div style={{border: "1px solid blue", padding: "10px"}}>
            <h1>Number - {number}</h1>
            <button onClick={() => dispatch(increaseNumber())}>Increase</button>
            <button onClick={() => dispatch(decreaseNumber())}>Decrease</button>
        </div>
    );
}; 

export default Number ;