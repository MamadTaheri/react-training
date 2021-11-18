import React, {useState} from 'react';
import {initialProducts} from "../../assets/data";
import ProductInfo from "./ProductInfo";

const ProductList = () => {

    const [items, setItems] = useState(initialProducts);

    const removeItem = (id) => {
        if(window.confirm('are you sure remove item ? ')){
            setItems([...items.filter(q => q.id !== id)])
        }
    }

    return (
        <div className="container">
            <h2>Product List with Function Component</h2>
            <div className="row">
                {
                    items.map((item, index) =>
                        <ProductInfo
                            key={item.id}
                            info={item}
                            removeItem={removeItem}
                        />
                    )
                }
            </div>
        </div>
    );
};

export default ProductList;