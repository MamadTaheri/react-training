import { useRef } from "react";
import Button from "./Button";

const UseImperativeHandleComponents = () => {
  const buttonRef = useRef(null);

  return (
    <div>
      <div className="border border-info rounded p-2">
        <h4> An example for using useImperativeHandle hook </h4>
        <br />
        <button onClick={() => buttonRef.current.alterToggle()} className="btn btn-success">Button from Parent</button>
        <br />
        <br />
        <Button ref={buttonRef} />
      </div>
    </div>
  );
};

export default UseImperativeHandleComponents;
