import React, { Component } from 'react';
import './App.css';
import Shop from './Shop';
import Contact from './Contact';
import About from './About';
import FoodItemList from './FoodItemList';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


const Nav = () => (
  <Router>
    <div>
      <div className="navigation">
        <ul>
          <li><Link  to="/" >Home</Link></li>
          <li><Link  to="/Contact" >Contact</Link></li>
          <li><Link to="/Shop" >Shop</Link></li>

        </ul>
        </div>
        <Route exact path="/" component={About}/>
        <Route path="/Contact" component={Contact}/>
        <Route path="/Shop" component={Shop}/>
    </div>
  </Router>
)



export default Nav;
