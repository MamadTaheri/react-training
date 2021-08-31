import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import HomePage from './components/HomePage';
import Blogs from './components/Blogs';
import Products from './components/Products';
import AboutUS from './components/AboutUs';
import Navbar from './components/Navbar';
import Product from './components/Product';
import NotFound from './components/NotFound';

import classes from './App.module.css'

class App extends Component {
  render() {
    return (
      <div>
       <div className={classes.topbar}>
          <Navbar />
       </div>

        <div>
          <Switch>
              <Route path="/products/:id" component={Product} />
              <Route path="/blogs/:author?" render={(props) => <Blogs name="Milad" {...props} />} />
              <Route path="/products" component={Products} />
              <Route path="/aboutus" component={AboutUS} />
              <Route path="/notfound" component={NotFound} />
              <Redirect from="/articles" to="/blogs" />
              <Route exact path="/" component={HomePage} />
              <Redirect to="/notfound" />
           </Switch>
        </div>
      </div>
    )
  }
}

export default App