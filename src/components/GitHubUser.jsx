import React from 'react';
import Fetch from "./Fetch";

const UserDetails = ({ data }) => {
    return (
        <div>
            <img src={data.avatar_url} alt={data.login} style={{ width: 200 }} />
            <div>
                {data.name && <p>{data.name}</p>}
                {data.location && <p>{data.location}</p>}
            </div>
        </div>
    )
}

const GitHubUser = ( {login} ) => {
    return (
        <Fetch
            uri={`https://api.github.com/users/${login}`}
            renderSuccess={UserDetails}
        />
    );
};

export default GitHubUser;