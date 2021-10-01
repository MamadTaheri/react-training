import React, { useState } from "react";
import ComponentA from "./components/ComponentA";

export const NameContext = React.createContext();
export const AgeContext = React.createContext();

const App = () => {
  const [name, setName] = useState("mamad");

  return (
    <div>
      <NameContext.Provider value={name}>
        <AgeContext.Provider value={24}>
          <ComponentA />
        </AgeContext.Provider>
      </NameContext.Provider>
    </div>
  );
};

export default App;
