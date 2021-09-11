import React, {useState} from 'react';
import { increaseCounterAction, decreaseCounterAction } from '../redux/counter/counterAction';
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {

    const [value, setValue] = useState(1)
    const counter = useSelector(state => state.counterState.counter);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Counter = {counter} </h1>
            <input type="text" value={value} onChange={event => setValue(event.target.value) } />
            <button onClick={() => {dispatch(increaseCounterAction(+value))}}>Increase</button>
            <button onClick={() => {dispatch(decreaseCounterAction(+value))}}>Decrease</button>
        </div>
    );
};

export default Counter;