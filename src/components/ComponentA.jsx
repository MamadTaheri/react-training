import React from 'react';
import ComponentB from './ComponentB';

const ComponentA = () => {
    return (
        <div style={{border:"1px solid blue", margin: "2rem"}}>
            ComponentA
            <ComponentB />
        </div>
    );
};

export default ComponentA;