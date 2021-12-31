import React from 'react';
import {UserInfoform} from "./components/HOC/UserInfoform";
import UserInfo from "./components/people/UserInfo";


const App = () => {
    return (
        <>
            <UserInfo userId="123" />
            <h1>------------------------------</h1>
            <UserInfo userId="234" />
            <h1>------------------------------</h1>
            <UserInfo userId="345" />
        </>
    );
};

export default App;