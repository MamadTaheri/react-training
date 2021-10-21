import { useState } from 'react';
import AuthContext from './AuthContext';

const AuthState = ({children}) => {

    const [show, setShow] = useState(false);

    const showHandler = () => {
        setShow(!show);
    }

    return (
        <AuthContext.Provider value={{show, showHandler}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthState;