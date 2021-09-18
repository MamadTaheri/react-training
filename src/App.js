import React, { Component } from 'react'

import { Route, Switch, Link } from 'react-router-dom'
import AboutUs from './components/AboutUs'
import Blogs from './components/Blogs'
import HomePage from './components/HomePage'
import Products from './components/Products'

export default class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">Home page</Link></li>
          <li><Link to="/blogs">Blogs</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/aboutus">About Us</Link></li>
        </ul>
        <div>
          <Switch>
            <Route path="/blogs" component={Blogs} />
            <Route path="/products" component={Products} />
            <Route path="/aboutus" component={AboutUs} />
            <Route path="/" component={HomePage} />
          </Switch>
        </div>
      </div>
    )
  }
}