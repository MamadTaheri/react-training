import React, {useState} from 'react';

import {categories, products} from "../../globalData/initialData";
import ProductList from "./ProductList";

const ProductContainer = () => {
    const [items, setItems] = useState(products);
    return (
        <>
            <div className="card">
                <div className="card-header">مدیریت محصولات</div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-7">
                            <ProductList data={items} />
                        </div>
                        <div className="col-md-5">ProductInfo</div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ProductContainer;