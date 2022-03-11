import { useState, useImperativeHandle, forwardRef } from "react";

const Button = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);

  useImperativeHandle(ref,() => ({
      alterToggle(){
        setToggle(!toggle)
      },
  }));

  return (
    <>
        <button className="btn btn-primary">
          Buttob from Child
        </button>
        {toggle && <h5>Toggle Is true</h5>}
    </>
  );
});

export default Button;
