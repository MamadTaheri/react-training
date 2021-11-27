import React, {useEffect, useState} from 'react';
import GitHubUser from "./components/GitHubUser";
import UserDetails from "./components/UserDetails";
import SearchBox from "./components/SearchBox";
import UserRepositories from "./components/UserRepositories";
import RepositoryReadme from "./components/RepositoryReadme";
import {GraphQLClient} from "graphql-request";
import List from "./components/List";

const query =
    `query findrepos($login:String!) {
    user(login:$login) {
        login
        name
        location
        avatar_url: avatarUrl
        repositories(first: 100) {
            totalCount
            nodes {
                name
            }
        }
    }
}`
;

const client = new GraphQLClient(
    "https://api.github.com/graphql",
    {
        headers: {
            Authorization: `Bearer <PERSONAL_ACCESS_TOKEN>`
        }
    }
);

const App = () => {
    const [login, setLogin] = useState("moonhighway");
    const [repo, setRepo] = useState("learning-react");
    const [userData, setUserData] = useState();

    const inputHandler = (data) => {
     setLogin(data);
    }

    useEffect(() => {
        client
            .request(query, { login})
            .then(({ user }) => user)
            .then(setUserData)
            .catch(console.error);
    },[client, query, login]);

    if (!userData) return <p>loading...</p>

    return (
        <div className="container p-5 justify-content-center border border-primary text-center">
            <SearchBox inputHandler={inputHandler}/>
            <UserDetails {...userData} />
            <p>{userData.repositories.totalCount} - repos</p>
            <List
                data={userData.repositories.nodes}
                renderItem={repo => <span>{repo.name}</span>}
            />
        </div>
    );
};

export default App;