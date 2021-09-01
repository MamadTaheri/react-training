import React from 'react';

const ComponentB = (props) => {

    console.log("component B rendered")

    return (
        <div>
            Component B: {props.value}
            <button onClick={props.changeHandler}>change B</button>
        </div>
    );
};

export default React.memo(ComponentB);