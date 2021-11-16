import React from 'react';
import ProductList from './components/ProductList';
import ProductListClass from './components/ProductListClass';

const App = () => {
    return (
        <>
            <div>
                <h1>salam</h1>
            </div>
            <ProductList />
            <h3>Class component</h3>
            <ProductListClass />
        </>
    );
};

export default App;