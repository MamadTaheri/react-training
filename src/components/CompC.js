import React, { useContext } from 'react';

import { NameContext, AgeContext } from '../App';

const CompC = () => {

    const name = useContext(NameContext)
    const age = useContext(AgeContext)

    return (
        <div>
            <h1>Component C {name} - Age = {age}</h1>
        </div>
    );
};

export default CompC;