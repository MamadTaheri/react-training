import React, { useEffect } from 'react';

const Landing = () => {

    useEffect(() => {
        document.title = "Landing page"
    }, [])

    return (
        <div>
            <h1>Landing page</h1>
        </div>
    );
};

export default Landing;