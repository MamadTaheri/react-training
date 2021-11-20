import React from 'react';
import ProductContainer from "./components/product/ProductContainer";
import logo from '../src/assets/images/logo.JPG'
import {BrowserRouter as Router, NavLink, Route, Routes, Switch} from 'react-router-dom'
import {localRoutes} from "./globalData/localRoutes";
import MainDashboard from "./components/dashboard/MainDashboard";
import PageNotFound from "./components/page-not-found/PageNotFound";

const App = () => {
    return (
        <Router>
            <nav className="navbar navbar-expand-xl navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    <img src={logo} width="80" alt="logo" />
                </a>


                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-lg-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to={localRoutes.dashboard}>داشبورد</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={localRoutes.products}>لیست محصولات</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="container-fluid p-4">
                <Routes>
                    <Route path={localRoutes.dashboard} element={<MainDashboard /> } />
                    <Route path={localRoutes.products} element={<ProductContainer /> } />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;