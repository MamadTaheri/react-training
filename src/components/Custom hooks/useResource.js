import {useEffect, useState} from "react";
import axios from "axios";
import urls from "../../data/urls";

export const useResource = resourceUrl => {
    const [resource, setResourcer] = useState(null);

    useEffect(() => {
        (async () => {
            const response = await axios.get(resourceUrl);
            setResourcer(response.data);
        })();
    }, [resourceUrl]);

    return resource;
}