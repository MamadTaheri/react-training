import React from 'react';

const FunctionEvent = () => {
    
    const clickHandler = () => {
        alert("Function Click")
    }
    
    return (
        <div>
            <button onClick={clickHandler}>Function click</button>
        </div>
    );
};

export default FunctionEvent