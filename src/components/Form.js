import React, { useState } from "react";

const Form = () => {
  const [data, setData] = useState(["item"]);

  return (
    <div>
      <h1 className="">{JSON.stringify(data)}</h1>
      <button className=""  onClick={() => setData([...data, "new item"])}>Add</button>
    </div>
  );
};

export default Form;
