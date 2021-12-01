import React from 'react';
import {Link, Route, Routes} from "react-router-dom"
import {About, Contact, Events, Home, Products} from "./pages";
import Whoops404 from "./Whoops404";
import Services from "./Services";
import History from "./History";

function App() {
    return (
         <div>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />}>
                    <Route path="services" element={<Services />}/>
                    <Route path="history" element={<History />}/>
                </Route>
                <Route path="/events" element={<Events />}/>
                <Route path="/products" element={<Products />}/>
                <Route path="/contact" element={<Contact />}/>
                <Route path="*" element={<Whoops404 />}/>
            </Routes>

             <nav className="navbar-nav">
                 <Link to="about">About</Link>
                 <Link to="events">Events</Link>
                 <Link to="products">Products</Link>
                 <Link to="contact">Contact Us</Link>
             </nav>
         </div>
    );
}

export default App;