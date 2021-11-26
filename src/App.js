import React from 'react';
import GitHubUser from "./components/GitHubUser";

const App = () => {
    return (
        <div className="border border-primary m-5">
            <GitHubUser login="MamadTaheri68" />
        </div>
    );
};

export default App;