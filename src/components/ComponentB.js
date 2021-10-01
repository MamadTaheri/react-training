import React from 'react';
import ComponentC from './ComponentC';

const ComponentB = ({name}) => {
    return (
        <div>
            <h1 className="">This is Comp B</h1>
            <ComponentC name={name} />
        </div>
    );
};

export default ComponentB;