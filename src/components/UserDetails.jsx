import React from 'react';
import UserRepositories from "./UserRepositories";

const UserDetails = ({data}) => {
    return (
        <div >
            <img src={data.avatar_url} alt={data.login} style={{ width: 200 }} />
            <div>
                <h1>{data.login}</h1>
                {data.name && <p>{data.name}</p>}
                {data.location && <p>{data.location}</p>}
            </div>
            <div className="d-flex justify-content-center">
                {/*<UserRepositories*/}
                {/*    login={data.login}*/}
                {/*    onSelect={repoName => console.log(`${repoName} selected`)}*/}
                {/*/>*/}
            </div>
        </div>
    );
};

export default UserDetails;