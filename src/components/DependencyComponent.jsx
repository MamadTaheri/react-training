import React, {useEffect, useState} from 'react';

const DependencyComponent = () => {
    const [val, set] = useState("");
    const [phrase, setPhrase] = useState("example phrase");

    const createPhrase = () => {
        setPhrase(val);
        set("");
    };

    useEffect(()=>{
        console.log(`typing "${val}"`)
    },[val]);

    useEffect(()=>{
        console.log(`saved phrase "${phrase}"`)
    },[phrase]);

    return (
        <div>
            <label>Favorite phrase:</label>
            <br />
            <input
                value={val}
                placeholder={phrase}
                onChange={e => set(e.target.value)}
            />
            <button onClick={createPhrase}>send</button>
        </div>
    );
};

export default DependencyComponent;