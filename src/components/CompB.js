import React, { useContext } from 'react';
import CompC from './CompC';

import { NameContext } from '../App';

const CompB = () => {


    const name = useContext(NameContext)

    return (
        <div>
            {name}
            <CompC />
            
        </div>
    );
};

export default CompB;