import './App.css'
import { Redirect, Route, Switch } from 'react-router-dom';
import Login from './components/auth/login/Login'

import SignUp from "./components/auth/signup/SignUp"


const App = () => {
  return (
    <div className="App">
       <Switch>
         <Route path="/login" component={Login} />
         <Route path="/signup" component={SignUp} />
         <Redirect from="/" to="/login" />
       </Switch>
    </div>
  );
};

export default App;