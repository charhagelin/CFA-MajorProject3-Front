import React, { Component } from 'react';
import Shop from './Shop';
import Contact from './Contact';
import About from './About';
import ShoppingCart from './ShoppingCart';
import './App.css';

import Nav from './Nav';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />

          <Switch>
            <Route exact path="/" component={About}/>
            <Route path="/shop" component={Shop}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/shopping-cart" component={ShoppingCart}/>
            <Route render={() => {
              return <p>404: Not Found</p>
            }} />
          </Switch>
        </div>
      </Router>
    );
 }
};

export default Home;
