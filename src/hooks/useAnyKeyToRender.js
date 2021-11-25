import React, {useEffect, useState} from 'react';

const useAnyKeyToRender = () => {
    const [, forceRender] = useState();

    useEffect(() => {
        window.addEventListener("click", forceRender);
        return window.removeEventListener("keydown", forceRender);
    },[])
};

export default useAnyKeyToRender;