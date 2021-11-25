import React, {useState} from 'react';

const DependencyComponent = () => {
    const a = useState("mohammad");
    console.log(a);

    return (
        <div>

        </div>
    );
};

export default DependencyComponent;