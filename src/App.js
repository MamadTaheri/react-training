import { Switch, Route,  } from "react-router-dom";

// Components
import Login from "./components/Login";

const App = () => {
  return ( 
     <div className="App">
        <Switch>
           <Route path="/" component={Login} />
        </Switch>
     </div>
  );
};

export default App;
