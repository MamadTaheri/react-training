import React, {useState} from 'react';
import {initialItems} from "../../assets/data";
import ProductInfo from "./ProductInfo";

const ProductList = () => {

    const [items, setItems] = useState(initialItems);

    return (
        <div className="container">
            <h2>Product List with Function Component</h2>
            <div className="row">
                {
                    items.map((item, index) => <ProductInfo key={item.id} info={item}/>)
                }
            </div>
        </div>
    );
};

export default ProductList;