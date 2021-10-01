import React, { useState } from "react";
import ComponentA from "./components/ComponentA";

const App = () => {

  const [name, setName] = useState("Milad");

  return (
    <div>
      <ComponentA name={name} />
    </div>
  );
};

export default App;
