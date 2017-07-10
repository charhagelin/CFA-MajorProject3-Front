import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-materialize';
import FontAwesome from 'react-fontawesome';



const Nav = () => {
  return(
    <Navbar right>
    	<li><Link to="/"> Home </Link></li>
    	<li><Link to="/shop"> Shop </Link></li>
    	<li><Link to="/contact"> Contact </Link></li>
    	<li><Link to="/shopping-cart"><FontAwesome name="shopping-cart" /> </Link></li>
    </Navbar>
  )
}

export default Nav;
