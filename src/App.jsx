import React from 'react';
import {printProps} from "./components/HOC/printProps";
import UserInfo from "./components/people/UserInfo";

const UserInfoWrapped = printProps(UserInfo);

const App = () => {
    return (
        <UserInfoWrapped a={1} b="Mamad" c={{ name: 'Mamadiii' }} />
    );
};

export default App;