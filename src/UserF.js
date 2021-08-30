import React from 'react';

import "./UserF.css"

const UserF = (props) => {
    const {name, age} = props
    const header = {color:"green", fontSize:"2rem", border:"1px solid green"};
    return (
        <div>
            <p style={header}>Hi. I am {name} and I am {age} years old</p>
            <p className="paragraph">Hi. I am {name} and I am {age} years old</p>
        </div>
    );
};
 

export default UserF;