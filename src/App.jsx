import React, { useEffect, useLayoutEffect, useRef } from "react";

const App = () => {
  const inputRef = useRef(null);

  console.log("Render");
  console.log(inputRef);

  useLayoutEffect(() => {
    console.log("useLayoutEffect");
    console.log(inputRef);
  }, []);

  useEffect(() => {
    console.log("useEffect");
    console.log(inputRef);
  }, []);

  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
};

export default App;
