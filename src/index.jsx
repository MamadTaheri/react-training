import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Provider } from "react-redux";
import {store, persistor} from "./stateManagement/store";

import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.querySelector("#root")
);
