import React, { useState } from 'react';

const Counter = () => {

    const [number, setNumber] = useState(0);

    return (
        <div>
            <h1>{number}</h1>
        </div>
    );
};

export default Counter;