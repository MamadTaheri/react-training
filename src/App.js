import React, {useState} from 'react';
import GitHubUser from "./components/GitHubUser";
import UserDetails from "./components/UserDetails";

const App = () => {
    const [login, setLogin] = useState("moontahoe");
    return (
        <>
            <GitHubUser login={login} />
        </>
    );
};

export default App;