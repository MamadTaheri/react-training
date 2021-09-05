import { Switch, Route } from "react-router-dom";
import Chat from "./components/Chat";

// Components
import Login from "./components/Login";

// Contexts
import AuthContextProvider from "./contexts/AuthContextProvider";

const App = () => {
  return (
    <div className="App">
      <AuthContextProvider>
        <Switch>
           <Route path="/chats" component={Chat} />
          <Route path="/" component={Login} />
        </Switch>
      </AuthContextProvider>
    </div>
  );
};

export default App;
