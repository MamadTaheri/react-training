import {useCurrentUser} from "../Custom hooks/useCurrentUser";
import {useUser} from "../Custom hooks/useUser";
import {useResource} from "../Custom hooks/useResource";
import urls from "../../data/urls";
import {useDataSource} from "../Custom hooks/useDataSource";
import axios from "axios";

const serverResource = resourceUrl => async () => {
    const response = await axios.get(resourceUrl);
    return response.data;
}

const localStorageResource = key  => () => {
    return localStorage.getItem(key);
}

const UserInfo = ({ userId }) => {
    // const user = useCurrentUser();
    // const user = useUser(userId);
    // const user = useResource(`${urls.users}/${userId}`)
    const user = useDataSource(useDataSource(serverResource(`${urls.users}/${userId}`)));
    const message = useDataSource(localStorageResource('message'));

    const { name, age, hairColor, hobbies } = user || {};

    return user ? (
        <>
            <h3>{name}</h3>
            <p>Age: {age} Years old</p>
            <p>Hair Color : {hairColor}</p>
            <h3>Hobbies:</h3>
            <ul>
                {hobbies.map(hobby => <li key={hobby}>{hobby}</li>)}
            </ul>
        </>
    ) : <p>Loading...</p>;
};

export default UserInfo;