import React from 'react';
import UserInfo from "./components/people/UserInfo";
import withUser from "./components/HOC/withUser";

const UserInfoWithLoader =withUser(UserInfo, '234');

const App = () => {
    return (
        <UserInfoWithLoader />
    );
};

export default App;