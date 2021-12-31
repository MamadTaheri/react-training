import {useEffect, useState} from "react";
import axios from "axios";
import urls from "../../data/urls";

export const useDataSource = getResourceFunc => {
    const [resource, setResourcer] = useState(null);

    useEffect(() => {
        (async () => {
            const result = await getResourceFunc();
            setResourcer(result);
        })();
    }, [getResourceFunc]);

    return resource;
}