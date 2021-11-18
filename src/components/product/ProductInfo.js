import React from 'react';

const ProductInfo = ({info}) => {
    return (
        <div className="col-md-4">
            <div className="card bg-primary text-white">
                <div className="card-body">
                    <h3>Title: {info.title}</h3>
                    <h3>Price: {info.price}</h3>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;