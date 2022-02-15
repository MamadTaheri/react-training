import React from 'react';
import Counter from './components/Counter';
import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <div style={{textAlign: 'center'}}>
        <Counter />
      </div>
    </Provider>
  );
};

export default App;