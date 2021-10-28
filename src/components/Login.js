import React, { useEffect } from 'react';

const Login = () => {

    useEffect(() => {
        document.title = "Login page"
    }, [])

    return (
        <div>
            <h1 className="">Login page</h1>
        </div>
    );
};

export default Login;