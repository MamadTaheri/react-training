import { useState, useCallback } from "react";
import Child from "./Child";

const UseCallBackComponent = () => {
  const [data] = useState("Hi MAmad, Please Say Hello to world");
  const [toggle, setToggle] = useState(false);

  const returnComment = useCallback(() => {
      return data;
  }, [data])

  return (
    <div>
      <div className="border border-info rounded p-2">
        <h4> An example for using useCallback hook </h4>
        <br />
        <Child returnComment={returnComment} />
        <br />
        <button onClick={() => setToggle(!toggle)}>Toggle</button>
        <br />
        {toggle && <h1>Toggle is ON</h1>}
      </div>
      <br />
    </div>
  );
};

export default UseCallBackComponent;
