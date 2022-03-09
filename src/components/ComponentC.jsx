import React from 'react';

const ComponentC = ({ name }) => {
    return (
        <div style={{border:"1px solid black", margin: "2rem", padding: "2rem"}}>
            ComponentC --- name is : {name}
        </div>
    );
};

export default ComponentC;