import React from 'react';
import ProductContainer from "./components/product/ProductContainer";
import logo from '../src/assets/images/logo.JPG'
import {BrowserRouter as Router, Link, Switch} from 'react-router-dom'

const App = () => {
    return (
        <Router>
            <nav className="navbar navbar-expand-xl navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    <img src={logo} width="80" alt="logo" />
                </a>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-lg-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">داشبورد</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">لیست محصولات</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">لیست مشتریان</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="container-fluid p-4">
                <ProductContainer />
            </div>
            <div className="container-fluid">

            </div>
        </Router>
    );
};

export default App;