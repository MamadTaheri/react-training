import React, { useState } from "react";

const Counter = () => {

  const [number, setNumber] = useState(0);
  const [name, setName] = useState("Mamad")

  const nameHandler = () => {
    setName("Ali")
  }

  const increaseHandler = () => {
    setNumber(prevNumber => prevNumber + 1)
  }

  const decreaseHandler = () => {
    setNumber(prevNumber => prevNumber - 1)
  }

  return (
    <>
      <div className="">
        <h1 className="">Number is : {number}</h1>
        <button
          style={{ borderRadius: "12px", padding: "8px", margin: "5px" }}
          onClick={ increaseHandler}
        >
          Increase Number
        </button>
        <button
          style={{ borderRadius: "12px", padding: "8px", margin: "5px" }}
          onClick={decreaseHandler}
        >
          Decrease Number
        </button>
      </div>
      <div className=''>
         <h1 className=''>Name is : {name}</h1>
         <button className='' onClick={nameHandler}>Change namde</button>
      </div>
    </>
  );
};

export default Counter;
