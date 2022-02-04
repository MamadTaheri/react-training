<<<<<<< HEAD
// import React, { Component } from "react";
=======
import React from 'react';
import Counter from "./components/Counter";
import { Provider } from "react-redux";
import store from "./redux/store";
>>>>>>> 2f20597b5e852c11f3387fb546096d003a9c5e4e

// class component
// class App extends Component {
//     render() {
//         return (
//             <>
//              <h1>Salam</h1>
//              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae ea totam eveniet qui quasi ipsam ratione exercitationem ipsum eaque odit!</p>
//             </>
//         );
//     }
// }

// functional component
const App = () => {
<<<<<<< HEAD
  return (
    <>
      <h1>Salam</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae ea
        totam eveniet qui quasi ipsam ratione exercitationem ipsum eaque odit!
      </p>
    </>
  );
=======

    return (
            <Provider store={store}>
                <div style={{margin:"3rem"}}>
                    <Counter />
                </div>
            </Provider>
    );
>>>>>>> 2f20597b5e852c11f3387fb546096d003a9c5e4e
};

export default App;