import React, {   useState } from "react";
import Login from "./components/Login";
import Landing from "./components/Landing";

const App = () => {
  // const inputRef = useRef(null);
  const [toggle, setToggle] = useState(true);

  console.log("*******App Render**********");
  // console.log(inputRef);

  // useLayoutEffect(() => {
  //   console.log("useLayoutEffect");
  //   console.log(inputRef);

  //   return () => {
  //     console.log("useLayoutEffect cleanup");
  //   }
  // }, []);

  // useEffect(() => {
  //   console.log("useEffect");
  //   console.log(inputRef);

  //   return () => {
  //     console.log("useEffect cleanup");
  //   }
  // }, []);

  return (
    <div>
      {/* <input type="text" ref={inputRef} /> */}
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
       {toggle ? <Landing /> : <Login />}
    </div>
  );
};

export default App;
