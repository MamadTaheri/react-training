import React from 'react';
import DeepDependenciy from "./components/DeepDependenciy";
// import Checkbox from "./components/Checkbox";
// import DependencyComponent from "./components/DependencyComponent";

const App = () => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-4 text-center">
                    <h3>App</h3>
                    <hr />
                    {/*<Checkbox />*/}
                    {/*<DependencyComponent />*/}
                    <DeepDependenciy />
                </div>
            </div>
        </div>
    );
};

export default App;