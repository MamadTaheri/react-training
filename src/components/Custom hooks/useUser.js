import {useEffect, useState} from "react";
import axios from "axios";
import urls from "../../data/urls";

export const useUser = userId => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        (async () => {
            const response = await axios.get(`${urls.users}/${userId}`);
            setUser(response.data);
        })();
    }, [userId]);

    return user;
}