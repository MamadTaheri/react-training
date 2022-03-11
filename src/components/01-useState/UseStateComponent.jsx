import { useState } from 'react';

const UseStateComponent = () => {
    
    const [number, setNumber] = useState(0);
    const [inputValue, setInputValue] = useState("");

    return (
        <div>
            <div className="border border-info rounded p-2">
                <h4> An example for using useState hook </h4>
                <h6>{number}</h6>
                <button className="btn btn-success" onClick={() => setNumber(number + 1)}>Increase</button>
                <button className="btn btn-secondary" onClick={() => setNumber(0)}>RESET</button>
                <button className="btn btn-danger" onClick={() => setNumber(number - 1)}>Decrease</button>
            </div>
            <br />
            <div className="border border-secondary rounded p-2">
                <input 
                    type="text" 
                    placeholder="enter something..." 
                    value={inputValue} 
                    onChange={e => setInputValue(e.target.value)} 
                />
                <br />
                {inputValue}
            </div>
        </div>
    );
};

export default UseStateComponent;