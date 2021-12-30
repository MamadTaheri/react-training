import React, {useState} from 'react';
import ControlledOnboardingFlow from "./components/ControlledVSUncontrolled/ControlledOnboardingFlow";

const StepOne = ({ goToNext }) => (
    <>
        <h1>Step 1</h1>
        <button onClick={() => goToNext({ name: 'Mamad Taheri' })}>next</button>
    </>
);

const StepTwo = ({ goToNext }) => (
    <>
        <h1>Step 2</h1>
        <button onClick={() => goToNext({ age: 50 })}>next</button>
    </>
);

const StepThree = ({ goToNext }) => (
    <>
        <h1>Step 3</h1>
        <p>Congratulations! You qualify for our senior discount</p>
        <button onClick={() => goToNext({})}>next</button>
    </>
);

const StepFour = ({ goToNext }) => (
    <>
        <h1>Step 4</h1>
        <button onClick={() => goToNext({ hairColor: 'black' })}>next</button>
    </>
);

const App = () => {
    const [onboardingData, setOnboardingData] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);

    const onNext = stepData => {
        setOnboardingData({ ...onboardingData, ...stepData });
        setCurrentIndex(currentIndex + 1);
    }

    return (
        <div>
            <ControlledOnboardingFlow
                currentIndex={currentIndex}
                onNext={onNext}
            >
                <StepOne />
                <StepTwo />
                {onboardingData.age >= 62 && <StepThree />}
                <StepFour />
            </ControlledOnboardingFlow>
        </div>
    );
};

export default App;