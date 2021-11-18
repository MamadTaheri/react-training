import React, {useState} from 'react';
import {initialItems} from "../../assets/data";

const ProductList = () => {

    const [items, setItems] = useState(initialItems);

    return (
        <div className="container">
            <h2>Product List with Function Component</h2>

        </div>
    );
};

export default ProductList;