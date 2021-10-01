import React, { useContext } from "react";

import { NameContext, AgeContext } from "../App";

const ComponentC = () => {

    const name = useContext(NameContext);
    const age = useContext(AgeContext);

  return (
    <div>
      <h1>name : {name}</h1>
      <h1>age : {age}</h1>
    </div>
  );
};

export default ComponentC;
