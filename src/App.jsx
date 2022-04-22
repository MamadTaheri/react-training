import ProductDetails  from "./components/ProductDetails";
import ProductList from "./components/ProductList";

const App = () => {
  return (
    <div className="container-fluid">
      <h1>Redux Sample</h1>
      <hr />
      <div className="row">
        <div className="col">
          <ProductList />
        </div>
        <div className="col">
            <ProductDetails />
        </div>
      </div>
    </div>
  );
};

export default App;
