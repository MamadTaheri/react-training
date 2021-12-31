import React from 'react';
import RecursiveComponent from "./components/Functional Patterns/RecursiveComponent";
import {nestedObject} from "./data/nestedObject";
import {BigSuccessButton, DangerButton} from "./components/Functional Patterns/Composition";
import {BigSuccessButton2, DangerButton2} from "./components/HOC/partiallyApply";

const App = () => {
    return (
        <>
            <DangerButton text = "don't do it" />
            <BigSuccessButton text="Yes!!!!" />
            <h1>--------------------------------</h1>
            <DangerButton2 text = "Dont!" />
            <BigSuccessButton2 text="Do!" />
        </>
    );
};

export default App;