import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import FoodItemList from './FoodItemList';
import Shop from './Shop';
// import Contact from './Contact';
import Nav from './Router';


const Home = (props) => {
  return(
    <div>
      <p> Home Page </p>
      < Nav />
    </div>
  )
};



export default Home;
