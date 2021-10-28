import React, { useState } from 'react';
import Landing from './components/Landing';
import Login from './components/Login';

const App = () => {

  const [toggle, setToggle] = useState(true)

  return (
      <div className="">
        <button className="" onClick={() => {setToggle(!toggle)}}>Toggle</button>
         {toggle ? <Landing /> : <Login />}
      </div>       
  );
};

export default App;