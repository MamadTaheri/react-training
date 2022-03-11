import axios from "axios";
import { useEffect, useState } from "react";

const UseEffectComponent = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then(res => setData(res.data))
    }, [])

  return (
    <div className="col-md-12">
      <div className="border border-info rounded p-5">
        <h4> An example for using useEffect hook</h4>
        {data && JSON.stringify(data[0])}
      </div>
    </div>
  );
};

export default UseEffectComponent;
