import React from 'react';
import ComponentC from './ComponentC';

const ComponentB = ({ name }) => {
    return (
        <div style={{border:"1px solid green", margin: "2rem"}}>
            ComponentB
            <ComponentC name={name} />
        </div>
    );
};

export default ComponentB;