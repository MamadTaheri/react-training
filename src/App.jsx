import { useMemo, useState } from "react";

const App = () => {
  const [isShown, setIsShown] = useState(true);
  const [number , setNumber] = useState(0);

  const slow = useMemo(() => {
    for (let i = 0; i <1000000000; i++) {}
    return isShown;
  }, [isShown])

  const showHandler = () => {
    setIsShown(!isShown);
  }

  const numberHandler = () => {
    setNumber(prevNumber => prevNumber + 1);
  }

  console.log(number)

  return (
    <div className="container text-center">
      <button className="btn btn-primary" onClick={showHandler}>show-hide</button>
      <span>{slow ? "Show" : "Hide"}</span>
      <br />
      <br />
      <button className="btn btn-info" onClick={numberHandler}>+</button>
      <span>{number}</span>
    </div>
  );
};

export default App;