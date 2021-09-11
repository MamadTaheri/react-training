import React from 'react';
import { increaseCounterAction, decreaseCounterAction } from '../redux/counter/counterAction';
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {

    const counter = useSelector(state => state.counterState.counter);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Counter = {counter} </h1>
            <button onClick={() => {dispatch(increaseCounterAction())}}>Increase</button>
            <button onClick={() => {dispatch(decreaseCounterAction())}}>Decrease</button>
        </div>
    );
};

export default Counter;