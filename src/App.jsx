import React from 'react';
import UncontrolledOnboardingFlow from "./components/ControlledVSUncontrolled/UncontrolledOnboardingFlow";

const StepOne = ({ goToNext }) => (
    <>
        <h1>Step 1</h1>
        <button onClick={goToNext}>next</button>
    </>
);

const StepTwo = ({ goToNext }) => (
    <>
        <h1>Step 2</h1>
        <button onClick={goToNext}>next</button>
    </>
);
const StepThree = ({ goToNext }) => (
    <>
        <h1>Step 3</h1>
        <button onClick={goToNext}>next</button>
    </>
);

const App = () => {
    return (
        <div>
            <UncontrolledOnboardingFlow>
                <StepOne />
                <StepTwo />
                <StepThree />
            </UncontrolledOnboardingFlow>
        </div>
    );
};

export default App;