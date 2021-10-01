import React, { useContext } from 'react';
import ComponentC from './ComponentC';
import { NameContext } from '../App';

const ComponentB = () => {

    const name = useContext(NameContext)

    return (
        <div>
            <h1 className="">This is Comp B and name is : {name}</h1>
            <ComponentC />
        </div>
    );
};

export default ComponentB;