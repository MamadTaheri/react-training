import React, {useState} from 'react';
import GitHubUser from "./components/GitHubUser";

const App = () => {
    const [login, setLogin] = useState("moontahoe");
    return (
        <>
            <GitHubUser login={login} />
        </>
    );
};

export default App;