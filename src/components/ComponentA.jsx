import React from 'react';
import ComponentB from './ComponentB';

const ComponentA = ({ name }) => {
    return (
        <div style={{border:"1px solid blue", margin: "2rem"}}>
            ComponentA
            <ComponentB name={name} />
        </div>
    );
};

export default ComponentA;