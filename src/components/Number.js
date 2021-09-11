import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseNumberAction, increaseNumberAction } from '../redux/number/numberAction';



const Number = () => {

    const number = useSelector(state => state.numberState.number);
    const dispatch = useDispatch();

    return (
        <div>
        <h1>Number = {number} </h1>
        <button onClick={() => {dispatch(increaseNumberAction())}}>Increase</button>
        <button onClick={() => {dispatch(decreaseNumberAction())}}>Decrease</button>
    </div>
    );
};

export default Number;