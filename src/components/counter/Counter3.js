import React, {useEffect} from 'react';

const Counter3 = ({counter}) => {
    useEffect(() => {
        console.log("Counter 3 ComponentDidUpdate")
    }, [counter])
    return (
        <div>
            Counter3 : {counter}
        </div>
    );
};

export default Counter3;