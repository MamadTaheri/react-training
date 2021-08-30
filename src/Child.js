import React from 'react';

const Child = (props) => {
    console.log("Child is renderedd")
    return (
        <div>
            {props.text} Child
        </div>
    );
};

export default React.memo(Child);