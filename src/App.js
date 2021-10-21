import React from 'react';

import { createContext } from 'react';
import Card from './components/Card';

const AppContext = createContext();

const App = () => {
  return (
    <AppContext.Provider value={{ firstName: "ali" }}>
      <Card />
    </AppContext.Provider>
  );
};

export default App;