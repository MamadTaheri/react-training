import React from 'react';
import { Link } from 'react-router-dom';



const Header = () => {
    return (
        <header className="bg-primary p-3">
            <Link className="text-white p-3" to="/">Home</Link>
            <Link className="text-white p-3" to="/about">About</Link>
            <Link className="text-white p-3" to="/posts">Posts</Link>
        </header>
    );
};

export default Header;