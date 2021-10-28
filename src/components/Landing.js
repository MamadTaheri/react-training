import React, { useEffect } from 'react';
import useTitle from '../hooks/useTitle';

const Landing = () => {

    useTitle("LANDING PAGE");

    return (
        <div>
            <h1>Landing page</h1>
        </div>
    );
};

export default Landing;