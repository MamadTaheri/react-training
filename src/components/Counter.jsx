import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseCounter, decreaseCounter } from "../redux/counter/counterAction"
const Counter = () => {
    const [value, setValue] = useState(1);
    const counter = useSelector(state => state.counterState.counter)
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Counter : {counter}</h1>
            <input type="text" value={value} onChange={(e) => setValue(parseInt(e.target.value))} />
            <br />
            <br />
            <button className='btn btn-primary' onClick={() => dispatch(increaseCounter(value))} > Increase </button>
            <button  className='btn btn-danger' onClick={() => dispatch(decreaseCounter(value))} > Decrease </button>
        </div>
    );
};


export default Counter;