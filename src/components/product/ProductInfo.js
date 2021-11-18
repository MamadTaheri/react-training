import React from 'react';

const ProductInfo = ({info, removeItem, setEditMode}) => {
    return (
        <div className="col-md-4  my-3">
            <div className="card bg-primary text-white">
                <div className="card-header">
                    Item Info
                </div>
                <div className="card-body">
                    <h3>Title: {info.title}</h3>
                    <h3>Price: {info.price}</h3>
                    <button className="btn btn-warning btn-sm mx-3" onClick={() => setEditMode(info.id, true)}>Edit</button>
                    <button className="btn btn-danger btn-sm" onClick={() => removeItem(info.id)}>Remove</button>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;