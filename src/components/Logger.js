import React, { useState, useEffect } from 'react';

const Logger = () => {

    const [number, setNumber] = useState(0);
    const [second, setSecond] = useState(0);


    useEffect(() => {
        console.log(number)
    },[number])

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={() => setNumber(prevNumber => prevNumber + 1)}>Up</button>
            <br />
            <button onClick={() => setSecond(prevSecond => prevSecond + 1)}>Up</button>
            <h1>{second}</h1>
        </div>
    );
};

export default Logger;