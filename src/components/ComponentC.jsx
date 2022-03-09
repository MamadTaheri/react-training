import React, { useContext } from 'react';

import { NameContext,AgeContext } from '../App';

const ComponentC = () => {

    const name = useContext(NameContext);
    const age = useContext(AgeContext);

    return (
        <div style={{border:"1px solid black", margin: "2rem", padding: "2rem"}}>
            ComponentC :
            <br />
             name is : {name}
             <br />
             age is : {age}

        </div>
    );
};

export default ComponentC;