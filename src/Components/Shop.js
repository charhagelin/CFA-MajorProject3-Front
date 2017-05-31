import React, { Component } from 'react';
import './App.css';
import FoodItemList from './FoodItemList';
import axios from 'axios';

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodItems: []
    }
  };

  componentDidMount() {
    console.log('componentDidMount()');
    const URL = 'https://di-lafel-backend.herokuapp.com/api/v1/foodItems';
    axios.get(URL)
    .then((response) => {
      this.setState({ foodItems: response.data });

      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    console.log('Render()');
    return(
      <div>
        <ul>
           <h2>food items </h2>
           {this.state.foodItems.length < 1 ? <p>loading...</p> : <FoodItemList foodItems={this.state.foodItems} />}

         </ul>

      </div>
    );
  }
}
// {this.props.foodItems.map((foodItem, i)=> <li key={i}>{foodItem.name}</li>)}

// {this.state.foodItems.length < 1 ? <p>loading...</p> : <FoodItemList foodItems={this.state.foodItems} />}

export default Shop;
