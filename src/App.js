import React, {useState} from 'react';
import Cat from "./components/Cat";

const App = () => {
    const [cats, setCats] = useState(["Biscuit", "Jungle", "Outlaw"]);
    console.clear();
    return (
        <>
            {cats.map((name, i) =>
                <Cat key={i} name={name} />
            )}
            <button onClick={() => setCats([...cats, prompt("Name a Catd")])}>Add a Cat</button>
        </>
    );
};

export default App;