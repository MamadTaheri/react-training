import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/layout/Header";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Posts from "./components/pages/Posts";



const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/posts" component={Posts} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
