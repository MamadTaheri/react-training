import React, { useState } from 'react';
import ComponentA from './components/ComponentA';

const App = () => {

  const [name, setName] = useState("Mamad")

  return (
    <div style={{border:"1px solid red", margin: "2rem"}}>
      App
      <ComponentA name={name} />
    </div>
  );
};

export default App;