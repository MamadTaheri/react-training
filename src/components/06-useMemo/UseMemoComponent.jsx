import axios from "axios";
import { useEffect, useState } from "react";

const UseMemoComponent = () => {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => setData(res.data));
  }, []);

  const findLongestName = (comments) => {
    
    // ****************************************
    console.log("loop started..........");
    for(let i = 0; i < 3_000_000_000; i++) {};
    console.log("loop ended..........");
    // ****************************************

    if (!comments) return null;
    let longestName = "";
    for (let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name;
      if (currentName.length > longestName.length) {
        longestName = currentName;
      }
    }
    console.log("Computation of longestName has been completed");
    return longestName;
  };

  return (
    <div>
      <div className="border border-info rounded p-2">
        <h4> An example for using useMemo hook </h4>
        <h4> without memo</h4>
        <br />
        <br />
        <div>{data && findLongestName(data)}</div>

        <br />
        <br />

        <button className="btn btn-outline-primary" onClick={() => setToggle(!toggle)}>Toggle</button>
        {toggle && <h1>Toggle is true</h1>}
      </div>
    </div>
  );
};

export default UseMemoComponent;
