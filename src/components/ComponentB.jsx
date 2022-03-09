import React from 'react';
import ComponentC from './ComponentC';

const ComponentB = () => {
    return (
        <div style={{border:"1px solid green", margin: "2rem"}}>
            ComponentB
            <ComponentC />
        </div>
    );
};

export default ComponentB;