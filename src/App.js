import React, { Component } from 'react'

import { Route } from 'react-router-dom'
import AboutUs from './components/AboutUs'
import Blogs from './components/Blogs'
import HomePage from './components/HomePage'
import Products from './components/Products'

export default class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><a href="/">Home page</a></li>
          <li><a href="/blogs">Blogs</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/aboutus">About Us</a></li>
        </ul>
        <div>
           <Route path="/" component={HomePage} />
           <Route path="/blogs" component={Blogs} />
           <Route path="/products" component={Products} />
           <Route path="/aboutus" component={AboutUs} />
        </div>
      </div>
    )
  }
}

