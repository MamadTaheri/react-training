import { useReducer } from 'react';

const initialState = {
    num1: 0,
};

const reducer = (state, action) => {
    switch(action.type) {
        case "UP":
            return {num1: state.num1 + action.payload};
        case "DOWN":
            return {num1: state.num1 - action.payload};
        case "RESET":
            return initialState;
        default:
            return state;
    }
}

const Counter2 = () => {

    const [number, dispatch] = useReducer(reducer, initialState);

    return (
        <div className='container border border-primary text-center'>
            <h1>Number is: {number.num1}</h1>
            <button onClick={() => dispatch({type: "UP", payload: 5})    } className='btn btn-primary'>Up</button>
            <button onClick={() => dispatch({type: "RESET"}) } className='btn btn-info'>Reset</button>
            <button onClick={() => dispatch({type: "DOWN", payload: 3})  } className='btn btn-danger'>Down</button>
        </div>
    );
};

export default Counter2;