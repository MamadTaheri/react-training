import { useState, createContext } from "react";
import Login from "./Login";
import User from "./User";

export const AppContext = createContext(null);

const UseContextComponent = () => {
  const [username, setUsername] = useState("");

  return (
    <AppContext.Provider value={{ username, setUsername} }>
      <div>
        <div className="border border-info rounded p-2">
          <h4> An example for using useContext hook </h4>
          <br />
          <br />
          <Login />
          <User />
        </div>
      </div>
    </AppContext.Provider>
  );
};

export default UseContextComponent;
