import React, { useEffect, useRef } from 'react';

const App = () => {

  const input = useRef(null)

  useEffect(() => {
    console.log(input.current.value)
    input.current.focus()
  }, [])
  
  return (
    <div>
      <input ref={input} type="text" />
    </div>
  );
};

export default App;