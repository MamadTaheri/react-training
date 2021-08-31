import React, { useState } from "react";

import CompA from "./components/CompA";

export const NameContext = React.createContext();
export const AgeContext = React.createContext();

const App = () => {
  const [name, setName] = useState("Milad");

  return (
    <div>
      <NameContext.Provider value={name}>
        <AgeContext.Provider value={24}>
          <CompA name={name} />
        </AgeContext.Provider>
      </NameContext.Provider>
    </div>
  );
};

export default App;
