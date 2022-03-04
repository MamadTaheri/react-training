import { useState } from "react";
import Translate from "./components/Translate";
import options from "./data/options";

const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
        <Translate />
    </div>
  );
};

export default App;
