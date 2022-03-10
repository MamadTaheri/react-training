import React, { useState, useCallback } from 'react';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';

const App = () => {

  const [valueA, setValueA] = useState("A");
  const [valueB, setValueB] = useState("B");

  const changeHandlerA = useCallback(() => {
    setValueA(valueA => valueA += "A");
  }, []);
  
  const changeHandlerB = useCallback(() => {
    setValueB(valueB => valueB += "B")
  }, []);

  console.log("********************************App rendered********************************");

  return (
    <div className='container border border-primary text-center'>
      <ComponentA value={valueA} changeHandler={changeHandlerA} />
      <ComponentB value={valueB} changeHandler={changeHandlerB}  />
    </div>
  );
};

export default App;