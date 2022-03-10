import { useReducer } from 'react';

const initialState = 0;

const reducer = (state, action) => {
    switch(action) {
        case "UP":
            return state + 1;
        case "DOWN":
            return state - 1;
        case "RESET":
            return initialState;
        default:
            return state;
    }
}

const Counter = () => {

    const [number1, dispatch] = useReducer(reducer, initialState);
    const [number2, dispatch2] = useReducer(reducer, initialState);


    return (
        <div>
            <div className='container border border-primary text-center'>
                <h1>Number1 is: {number1}</h1>
                <button onClick={() => dispatch("UP")} className='btn btn-primary'>Up</button>
                <button onClick={() => dispatch("RESET")} className='btn btn-info'>Reset</button>
                <button onClick={() => dispatch("DOWN")} className='btn btn-danger'>Down</button>
            </div>
            <div className='container border border-primary text-center'>
                <h1>Number2 is: {number2}</h1>
                <button onClick={() => dispatch2("UP")} className='btn btn-primary'>Up</button>
                <button onClick={() => dispatch2("RESET")} className='btn btn-info'>Reset</button>
                <button onClick={() => dispatch2("DOWN")} className='btn btn-danger'>Down</button>
            </div>
        </div>
    );
};

export default Counter;