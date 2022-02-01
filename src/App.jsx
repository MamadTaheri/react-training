import React from 'react';
import {people} from './data/people'
import Counter from "./components/Counter";

const App = () => {
    console.table(people)
    return (
        <div style={{margin:"3rem"}}>
            <Counter />
        </div>
    );
};

export default App;