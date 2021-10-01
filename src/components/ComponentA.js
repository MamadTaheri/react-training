import React from 'react';
import ComponentB from './ComponentB';

const ComponentA = () => {
    return (
        <div>
            <h1 className="">This is Comp A</h1>
          <ComponentB />  
        </div>
    );
};

export default ComponentA;