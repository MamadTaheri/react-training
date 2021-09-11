import React, {useState, useRef, useEffect} from 'react';
import { increaseCounterAction, decreaseCounterAction } from '../redux/counter/counterAction';
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {

    const inputRef = useRef(null);

    const [value, setValue] = useState(1)
    const counter = useSelector(state => state.counterState.counter);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(inputRef)
        console.log(inputRef.current.type)
        inputRef.current.focus()
    }, [])

    return (
        <div>
            <h1>Counter = {counter} </h1>
            <input type="text" value={value} onChange={event => setValue(event.target.value) } />
            <button onClick={() => {dispatch(increaseCounterAction(+value))}}>Increase</button>
            <button onClick={() => {dispatch(decreaseCounterAction(+value))}}>Decrease</button>
            <input ref={inputRef} />
        </div>
    );
};

export default Counter;