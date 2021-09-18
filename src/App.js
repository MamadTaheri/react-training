import React, { Component } from 'react'

import { Route, Switch } from 'react-router-dom'
import AboutUs from './components/AboutUs'
import Blogs from './components/Blogs'
import HomePage from './components/HomePage'
import Navbar from './components/Navbar'
import Products from './components/Products'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
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