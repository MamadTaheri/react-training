import React, {useState} from 'react';
import GitHubUser from "./components/GitHubUser";
import UserDetails from "./components/UserDetails";
import SearchBox from "./components/SearchBox";
import UserRepositories from "./components/UserRepositories";
import RepositoryReadme from "./components/RepositoryReadme";

const App = () => {
    const [login, setLogin] = useState("moonhighway");
    const [repo, setRepo] = useState("learning-react");

    const inputHandler = (data) => {
     setLogin(data);
    }

    return (
        <div className="container p-5 justify-content-center border border-primary text-center">
            <SearchBox inputHandler={inputHandler}/>
            {login && <GitHubUser login={login} />}
            {login && (<UserRepositories
                login={login}
                repo={repo}
                onSelect={setRepo}
            />)}
            {login && repo && <RepositoryReadme login={login} repo={repo} />}
        </div>
    );
};

export default App;