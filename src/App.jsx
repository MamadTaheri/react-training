import React from 'react';
import {UserInfoform} from "./components/HOC/UserInfoform";
import UserInfo from "./components/people/UserInfo";
import ProductInfo from "./components/products/ProductInfo";


const App = () => {
    return (
        <>
            <UserInfo userId="123" />
            <h1>-----------------------------------------------</h1>
            <ProductInfo productId="0" />
        </>
    );
};

export default App;