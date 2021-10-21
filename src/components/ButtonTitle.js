import { useContext } from "react";

import AuthContext from "../context/AuthContext";

const ButtonTitle = () => {
  const {show, showHandler} = useContext(AuthContext);

  return (
    <>
      <button onClick={() => showHandler()}>Click me</button>
      {show && <h1>Test Texgt</h1>}
    </>
  );
};

export default ButtonTitle;
