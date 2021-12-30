import React from 'react';
import UncontrolledOnboardingFlow from "./components/ControlledVSUncontrolled/UncontrolledOnboardingFlow";

const StepOne = ({ goToNext }) => (
    <>
        <h1>Step 1</h1>
        <button onClick={() => goToNext({ name: 'Mamad Taheri' })}>next</button>
    </>
);

const StepTwo = ({ goToNext }) => (
    <>
        <h1>Step 2</h1>
        <button onClick={() => goToNext({ age: 100 })}>next</button>
    </>
);
const StepThree = ({ goToNext }) => (
    <>
        <h1>Step 3</h1>
        <button onClick={() => goToNext({ hairColor: 'black' })}>next</button>
    </>
);

const App = () => {
    return (
        <div>
            <UncontrolledOnboardingFlow onFinish={data => {
                console.log(data);
                alert('On Boarding data Completed successfully');
            }}>
                <StepOne />
                <StepTwo />
                <StepThree />
            </UncontrolledOnboardingFlow>
        </div>
    );
};

export default App;