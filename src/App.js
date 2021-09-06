import './App.css'
import Counter from "./components/Counter";
import Number from './components/Number';
import Users from './components/Users';
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
        <br/>
        <Number />
        <Users />
      </div>
    </Provider>
  );
};

export default App;
