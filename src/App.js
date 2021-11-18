import React, {useState} from 'react';
import ProductList from "./components/product/ProductList";
import CustomerList from "./components/customer/CustomerList";
import Counter from "./components/counter/Counter";
import Counter2 from "./components/counter/Counter2";
import Counter3 from "./components/counter/Counter3";

function App() {
    const [showProductComponent, setShowProductComponent] = useState(true);
    const [counter, setCounter] = useState(5);
    return (
        <div>
            <h1>Hello World</h1>
            <hr />
            <button className="btn btn-outline-primary mx-2" onClick={() => setShowProductComponent(true)}>Show Products</button>
            <button className="btn btn-outline-primary mx-2" onClick={() => setShowProductComponent(false)}>Show Customers</button>
            <br />
            <br />
            {showProductComponent ? <ProductList /> : <CustomerList />}
            <h4>Pure Component Sample</h4>
            <label>Counter Value :
                <input type={"number"} onChange={(event) => setCounter(parseInt(event.target.value))} />
            </label>
            <Counter counter={counter} />
            <Counter2 counter={counter} />
            <Counter3 counter={counter} />
        </div>
    );
}

export default App;