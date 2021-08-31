import React, { Component } from 'react';
import {Link } from 'react-router-dom'

import classes from './Navbar.module.css'

class Navbar extends Component {
    render() {
        return (
            <div>
                <ul className={classes.ul}>
                    <li><Link to ="/">HomePage</Link></li>
                    <li><Link to ="/blogs/milad">Blogs</Link></li>
                    <li><Link to ="/products">Products</Link></li>
                    <li><Link to ="/aboutus">About Us</Link></li>
                </ul>
            </div>
        );
    }
}

export default Navbar;