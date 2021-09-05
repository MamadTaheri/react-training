import React from 'react';
import { increase } from '../redux/counter/counterAction';
import { useSelector, useDispatch } from 'react-redux';

const Counter = (props) => {

    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Counter - {counter} </h1>
            <button onClick={() => dispatch(increase())} >Increase</button>
        </div>
    );
};

export default Counter;