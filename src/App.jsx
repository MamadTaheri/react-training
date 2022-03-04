import { useState } from "react";
import Dropdown from "./components/Dropdown";
// import Accordion from './components/Accordion';
// import Search from './components/Search';
// import items from "./data/items";
import options from "./data/options";

const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      <Dropdown
        selected={selected}
        onSelectedChanged={setSelected}
        options={options}
      />
    </div>
  );
};

export default App;
