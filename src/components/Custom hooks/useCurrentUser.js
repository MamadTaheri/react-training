import {useEffect, useState} from "react";
import axios from "axios";
import urls from "../../data/urls";

export const useCurrentUser = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        (async () => {
            const response = await axios.get(urls.currentUser);
            setUser(response.data);
        })();
    }, []);

    return user;
}