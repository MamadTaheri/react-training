import React, { useEffect } from 'react';

const Child = ({ returnComment }) => {

    console.log("Child render...");

    useEffect(() => {
        console.log("Information has been received");
    }, [returnComment]);

    return (
        <div>
            {returnComment()}
        </div>
    );
};

export default Child;