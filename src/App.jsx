import React from "react";
import UseEffectComponent from "./components/02-useEffect/UseEffectComponent";
// import UseStateComponent from './components/01-useState/UseStateComponent';
// import UseReducerComponent01 from "./components/04-useReducer/UseReducerComponent01";
// import UseReducerComponent02 from "./components/04-useReducer/UseReducerComponent02";

const App = () => {
  return (
    <div className="container text-center border border-primary rounded p-2 ">
      <div className="row">
        {/* <UseStateComponent /> */}
        {/* <UseReducerComponent01 /> */}
        {/* <UseReducerComponent02 /> */}
        <UseEffectComponent />
      </div>
    </div>
  );
};

export default App;
