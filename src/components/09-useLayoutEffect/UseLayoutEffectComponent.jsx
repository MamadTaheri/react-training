import { useLayoutEffect, useEffect } from "react";

const UseLayoutEffectComponent = () => {

    useLayoutEffect(() => {
        console.log("useLayoutEffect");
    }, []);

    useEffect(() => {
        console.log("useEffect");
    }, [])
 
  return (
    <div>
      <div className="border border-info rounded p-2">
        <h4> An example for using useLayoutEffect hook </h4>
        <h4> useLayoutEffect !== useEffect  </h4>
      </div>
    </div>
  );
};

export default UseLayoutEffectComponent;
