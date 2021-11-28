import React from 'react';

const SiteLayout = ({ children, menu = c => null}) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3 bg-dark vh-100 text-white p-5">{menu}</div>
                <div className="col-md-9">{children}</div>
            </div>
        </div>
    );
};

export default SiteLayout;