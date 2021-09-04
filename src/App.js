import './App.css'
import { Switch, Route, Redirect } from 'react-router-dom';

// Components
import Store from './components/store/Store';
import ProdeuctDetails from './components/productdetails/ProdeuctDetails';


// Context
import ProductContextProvider from './context/ProductContextProvider';

const App = () => {
  return (
    <ProductContextProvider>
      <Switch>
        <Route path="/products/:id" component={ProdeuctDetails} />
        <Route path="/products" component={Store} />
        <Redirect to="/products" />
      </Switch>

    </ProductContextProvider>
  );
};

export default App;