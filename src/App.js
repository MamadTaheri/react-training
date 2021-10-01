import React, { useState } from 'react';
import Logger from './components/Logger';

const App = () => {

  const [isShown, setIsShown] = useState(true)

  return (
    <div>
      <button className="" onClick={() => setIsShown(false)}>Delete</button>
      {isShown && <Logger />}
    </div>
  );
};

export default App;