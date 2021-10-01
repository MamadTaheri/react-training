import React from 'react';
import ComponentB from './ComponentB';

const ComponentA = ({name}) => {
    return (
        <div>
            <h1 className="">This is Comp A</h1>
          <ComponentB name={name} />  
        </div>
    );
};

export default ComponentA;