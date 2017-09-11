import React from 'react';
import './App.css';


const About = (props) => {
  return (
    <div>
      <div className="headerImg">
        <h2 className="hero-title1">Bringing fresh</h2> <h2 className="hero-title2"> produce to you! </h2>
      </div>

      <div className="container">
        <img src={require('../assets/images/light-green-trans-1.png')} className="dilafel-logo" />
        <p className="home-content__text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
        <h4 className="home-content__subtitle">" We belive in organic producs <br /> for the best results "</h4>
        <p className="home-content__text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>

      </div>
    </div>
  );
}


export default About;
