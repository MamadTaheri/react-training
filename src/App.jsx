import React from 'react';
import RecursiveComponent from "./components/Functional Patterns/RecursiveComponent";
import {nestedObject} from "./data/nestedObject";
import {BigSuccessButton, DangerButton} from "./components/Functional Patterns/Composition";

const App = () => {
    return (
        <>
            <DangerButton text = "don't do it" />
            <BigSuccessButton text="Yes!!!!" />
        </>
    );
};

export default App;