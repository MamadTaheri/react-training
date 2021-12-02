import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
// import {BrowserRouter} from "react-router-dom";
import Menu from "./Menu";
import {data} from "./data";

ReactDOM.render(
    <Menu title="Delicios Reciepe" recipes={data} />

    , document.getElementById("root"));
