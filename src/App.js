import React, {useState} from 'react';
import ProductList from "./components/product/ProductList";
import CustomerList from "./components/customer/CustomerList";

function App() {
    const [showProductComponent, setShowProductComponent] = useState(true);
    return (
        <div>
            <h1>Hello World</h1>
            <hr />
            <button className="btn btn-outline-primary mx-2" onClick={() => setShowProductComponent(true)}>Show Products</button>
            <button className="btn btn-outline-primary mx-2" onClick={() => setShowProductComponent(false)}>Show Customers</button>
            <br />
            <br />
            {showProductComponent ? <ProductList /> : <CustomerList />}
        </div>
    );
}

export default App;