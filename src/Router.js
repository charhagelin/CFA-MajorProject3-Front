import React, { Component } from 'react';
import './App.css';
import Shop from './Shop';
import Contact from './Contact';
import About from './About';
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
          <li><Link  to="/About" activeClassName="active">Home</Link></li>
          <li><Link  to="/Contact" activeClassName="active">Contact</Link></li>
          <li><Link to="/Shop" activeClassName="active">Shop</Link></li>

        </ul>
        </div>
        <Route path="/About" component={About}/>
        <Route path="/Contact" component={Contact}/>
        <Route path="/Shop" component={Shop}/>
    </div>
  </Router>
)



export default Nav;
