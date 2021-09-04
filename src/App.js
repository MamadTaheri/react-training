import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/shared/Navbar";

// Components
import Store from "./components/store/Store";
import ProdeuctDetails from "./components/productdetails/ProdeuctDetails";
import ShopCart from "./components/ShopCart";

// Context
import ProductContextProvider from "./context/ProductContextProvider";
import CartContextProvider from "./context/CartContextProvider";

const App = () => {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <Navbar />
        <Switch>
          <Route path="/products/:id" component={ProdeuctDetails} />
          <Route path="/products" component={Store} />
          <Route path="/cart" component={ShopCart} />
          <Redirect to="/products" />
        </Switch>
      </CartContextProvider>
    </ProductContextProvider>
  );
};

export default App;
