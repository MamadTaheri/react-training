import React from 'react';
import Card from './components/Card';
import AuthState from './context/AuthState';

const App = () => {
  return (
      <AuthState>
        <Card />
      </AuthState>
  );
};

export default App;