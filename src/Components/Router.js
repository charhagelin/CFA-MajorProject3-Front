import React from 'react';
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
      <div className="banner"></div>
        <div className="navigation">
          <ul>
            <img src="http://res.cloudinary.com/charhagelin/image/upload/v1496223198/di_lafel_brajwj.png" height="50px;" />
            <li><Link  to="/" >Home</Link></li>
            <li><Link  to="/contact" >Contact</Link></li>
            <li><Link to="/shop" >Shop</Link></li>
            

          </ul>
          </div>
          <Route exact path="/" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/shop" component={Shop}/>
    </div>
  </Router>
)



export default Nav;
