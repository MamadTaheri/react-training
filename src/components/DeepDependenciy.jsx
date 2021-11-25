import React, {useEffect} from 'react';
import useAnyKeyToRender from "../hooks/useAnyKeyToRender";


const DeepDependenciy = () => {
    useAnyKeyToRender();

    useEffect(() => {
        console.log("fresh render")
    })

    return (
        <div>
            <h1>Open the console</h1>
        </div>
    );
};

export default DeepDependenciy;