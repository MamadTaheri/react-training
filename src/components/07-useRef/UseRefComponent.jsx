import { useRef } from "react";

const UseRefComponent = () => {
  const inputRef = useRef(null); 
  
  const clickHandler = () => {
    alert(inputRef.current.value);
    inputRef.current.value = "";
  }

  return (
    <div>
      <div className="border border-info rounded p-2">
        <h4> An example for using useRef hook </h4>
        <br />
        <h5>Mamad</h5>
        <br />
        <input type="text" placeholder="Enter Something please..." ref={inputRef} />
        <br />
        <br />
        <button className="btn btn-primary" onClick={clickHandler}>Change</button>
      </div>
    </div>
  );
};

export default UseRefComponent;
