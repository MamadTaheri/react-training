import React from 'react';
import {useLocation} from "react-router-dom";

const Whoops404 = () => {
    let location = useLocation();
    console.log(location);
    return (
        <div>
            <h1>Resource not found at:</h1>
            <h3>{location.pathname}</h3>
            <hr />
        </div>
    );
};

export default Whoops404;