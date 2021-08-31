import React, { useState } from 'react';
import CompA from './components/CompA';

const App = () => {

  const [name, setName] = useState("Milad")

  return (
    <div>
      <CompA name={name} />
    </div>
  );
};

export default App;