import React, {useState} from 'react';
import ControlledModal from "./components/ControlledVSUncontrolled/ControlledModal";

const App = () => {
    const [shouldShowModal, setShouldShowModal] = useState(false);

    return (
        <>
            <ControlledModal
                shouldShow={shouldShowModal}
                onRequestClose={() => setShouldShowModal(false)} >
                <h1>Salam be hame</h1>
                <p>How Are you?</p>
            </ControlledModal>
            <button onClick={() => setShouldShowModal(!shouldShowModal)}>
                {shouldShowModal ? 'Hide Modal' : 'Show modal'}
            </button>
        </>
    );
};

export default App;