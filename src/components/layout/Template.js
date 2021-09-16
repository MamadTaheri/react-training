import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Template = (props) => {
    return (
        <div>
            <Header />
            {props.children}
            <Footer />
        </div>
    );
};

export default Template;