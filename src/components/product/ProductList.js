import React, {useState} from 'react';
import {initialProducts} from "../../assets/data";
import ProductInfo from "./ProductInfo";
import ProductEdit from "./ProductEdit";

const ProductList = () => {

    const [items, setItems] = useState(initialProducts);

    const removeItem = (id) => {
        if(window.confirm('are you sure remove item ? ')){
            setItems([...items.filter(q => q.id !== id)])
        }
    }

    const addItem = (item) => {
        setItems([...items, item]);
    }

    const editItem = (item) => {
        let temp = [...items];
        const index = items.findIndex(q => q.id === item.id);
        temp[index] = item;
        setItems([...temp]);
    }

    const setEditMode = (id, mode = true) => {
        let temp = [...items];
        const index = items.findIndex(q => q.id === id);
        temp[index].editMode = mode;
        setItems([...temp]);
    }

    return (
        <div className="container">
            <h2>Product List with Function Component</h2>
            <div className="row">
                {
                    items.map((item, index) =>
                        item.editMode ?
                            <ProductEdit key={item.id} info={item} save={editItem} cancel={setEditMode} />
                            :
                            <ProductInfo key={item.id} info={item} removeItem={removeItem} setEditMode={setEditMode} />
                    )
                }
            </div>
        </div>
    );
};

export default ProductList;