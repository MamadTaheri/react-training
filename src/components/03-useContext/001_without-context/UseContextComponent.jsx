import { useState } from "react";
import Login from "./Login";
import User from "./User";

const UseContextComponent = () => {
  const [username, setUsername] = useState("");

  return (
    <div>
      <div className="border border-info rounded p-2">
        <h4> An example for using useContext hook </h4>
        <br />
        <br />
        <Login setUsername={setUsername} />
        <User username={username} />
      </div>
    </div>
  );
};

export default UseContextComponent;
