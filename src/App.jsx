import React from 'react';
import Counter from "./components/Counter";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {

    return (
            <Provider store={store}>
                <div style={{margin:"3rem"}}>
                    <Counter />
                </div>
            </Provider>
    );
};

export default App;