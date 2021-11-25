import React from 'react';
import Checkbox from "./components/Checkbox";

const App = () => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-4 text-center">
                    <h3>App</h3>
                    <hr />
                    <Checkbox />
                </div>
            </div>
        </div>
    );
};

export default App;