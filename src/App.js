import React, {useState} from 'react';
import GitHubUser from "./components/GitHubUser";
import UserDetails from "./components/UserDetails";
import SearchBox from "./components/SearchBox";

const App = () => {
    const [login, setLogin] = useState("MamadTaheri68");

    const inputHandler = (data) => {
     setLogin(data);
    }

    return (
        <div className="container p-5 justify-content-center border border-primary text-center">
            <SearchBox inputHandler={inputHandler}/>
            <GitHubUser login={login} />
        </div>
    );
};

export default App;