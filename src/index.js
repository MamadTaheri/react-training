import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import Counter from "./components/Counter";
import {ActionConstants} from "./ActionConstants";

import counter from "./reducres";

const store = createStore(counter);
const rootElement = document.getElementById("root");

const render = () => ReactDOM.render(
    <Counter
        value = {store.getState()}
        onIncrement = {() => store.dispatch({ type: ActionConstants.INCREMENT })}
        onDecrement = {() => store.dispatch({ type: ActionConstants.DECREMENT })}
    />, rootElement
)

render();

store.subscribe(render)

