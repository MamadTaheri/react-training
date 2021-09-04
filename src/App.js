import './App.css'

// Components
import Store from './components/store/Store';

// Context
import ProductContextProvider from './context/ProductContextProvider';

const App = () => {
  return (
    <ProductContextProvider>
      <Store />
    </ProductContextProvider>
  );
};

export default App;