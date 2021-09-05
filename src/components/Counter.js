import React from 'react';
import { increase, decrease } from '../redux/counter/counterAction';
import { useSelector, useDispatch } from 'react-redux';

const Counter = (props) => {

    const counter = useSelector(state => state.counterState.counter)
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Counter - {counter} </h1>
            <button onClick={() => dispatch(increase())} >Increase</button>
            <button onClick={() => dispatch(decrease())} >Decrease</button>
        </div>
    );
};

export default Counter;