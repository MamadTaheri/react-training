import React from 'react';
import ProductList from "./components/product/ProductList";
import CustomerList from "./components/customer/CustomerList";

function App() {
    return (
        <div>
            <h1>Hello World</h1>
            <hr />
            <ProductList />
            <hr />
            <CustomerList />
        </div>
    );
}

export default App;