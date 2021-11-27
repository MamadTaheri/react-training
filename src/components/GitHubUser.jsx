import React from 'react';
import Fetch from "./Fetch";
import UserDetails from "./UserDetails";

const UserDetailsFunc = ({ data }) => {
    // return (
    //     <div>
    //         <img src={data.avatar_url} alt={data.login} style={{ width: 200 }} />
    //         <div>
    //             {data.name && <p>{data.name}</p>}
    //             {data.location && <p>{data.location}</p>}
    //         </div>
    //     </div>
    // )
    return <UserDetails data={data} />
}

const GitHubUser = ( {login} ) => {
    return (
        <Fetch
            uri={`https://api.github.com/users/${login}`}
            renderSuccess={UserDetailsFunc}
        />
    );
};

export default GitHubUser;