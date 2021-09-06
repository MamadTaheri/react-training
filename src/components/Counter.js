import React, {useState} from 'react';
import { increase, decrease } from '../redux/counter/counterAction';
import { useSelector, useDispatch } from 'react-redux';

const Counter = (props) => {

    const [value, setValue] = useState(1)
    const counter = useSelector(state => state.counterState.counter)
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Counter - {counter} </h1>
            <input type="text" value={value} onChange={(event) => setValue(event.target.value)} />
            <button onClick={() => dispatch(increase(+value))} >Increase</button>
            <button onClick={() => dispatch(decrease(+value))} >Decrease</button>
        </div>
    );
};

export default Counter;