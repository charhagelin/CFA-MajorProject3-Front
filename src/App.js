import React, { Component } from 'react';
import './App.css';
import Shop from './Shop';
import Contact from './Contact';
import Nav from './Router';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="body">
        <div className="headerImg">  </div>
          <div className="banner"><h1>Di-Lafel</h1></div>
          < Nav />


      </div>
    );
  }
}

export default App;
