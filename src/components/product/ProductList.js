import React, {useState} from 'react';
import {initialProducts} from "../../assets/data";
import ProductInfo from "./ProductInfo";

const ProductList = () => {

    const [items] = useState(initialProducts);

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