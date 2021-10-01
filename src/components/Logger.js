import React, { useEffect, useState } from 'react';

const Logger = () => {

    const [number, setNumber] = useState(0);
    const [second, setSecond] = useState(0);

    useEffect(() => {
        console.log(number)

        return () => {
            console.log("The Logger component is removed from dom");
        }
    },[]);

    return (
        <div style={{padding: "25px"}}>
           <h1>number : {number}</h1> 
           <h1>second : {second}</h1> 
           <button className="" onClick={() => setNumber(prevNumber => prevNumber + 1)}>Increase number</button>
           <button className="" onClick={() => setSecond(prevNumber => prevNumber + 1)}>Increase second</button>
        </div>
    );
};

export default Logger;