import React, { useEffect } from 'react';
import useTitle from '../hooks/useTitle';

const Login = () => {

    // useEffect(() => {
    //     document.title = "Login page"
    // }, [])
    useTitle("Login -> 554848DE")

    return (
        <div>
            <h1>Login Page</h1>
        </div>
    );
};

export default Login;