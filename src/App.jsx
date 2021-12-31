import React from 'react';
import RecursiveComponent from "./components/Functional Patterns/RecursiveComponent";
import {nestedObject} from "./data/nestedObject";

const App = () => {
    return (
         <RecursiveComponent data={nestedObject} />
    );
};

export default App;