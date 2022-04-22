import ProductDetails  from "./components/ProductDetails";
import ProductList from "./components/ProductList";
import ProductListWithThunk from "./components/ProductListWithThunk";

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
      <div className="row">
        <div className="col">
          <ProductListWithThunk />
        </div>
      </div>
    </div>
  );
};

export default App;
