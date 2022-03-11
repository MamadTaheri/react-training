import React from "react";
// import UseStateComponent from './components/01-useState/UseStateComponent';
// import UseEffectComponent from "./components/02-useEffect/UseEffectComponent";
// import UseReducerComponent01 from "./components/04-useReducer/UseReducerComponent01";
// import UseReducerComponent02 from "./components/04-useReducer/UseReducerComponent02";
import UseRefComponent from "./components/07-useRef/UseRefComponent";

const App = () => {
  return (
    <div className="container text-center border border-primary rounded p-2 ">
      <div className="row">
        {/* <UseStateComponent /> */}
        {/* <UseReducerComponent01 /> */}
        {/* <UseReducerComponent02 /> */}
        {/* <UseEffectComponent /> */}
        <UseRefComponent />
      </div>
    </div>
  );
};

export default App;
