import React, { Component } from 'react';
import './App.css';
import FoodItemList from './FoodItemList';
import ShoppingCart from './ShoppingCart';
import axios from 'axios';


class Shop extends Component {
  constructor(props) {
    super(props);

    // this.addToOrder = this.addToOrder.bind(this, keyArg);

    this.state = {
      foodItems: [],
      order: []
    }
  };

  componentDidMount() {
    const URL = 'https://di-lafel-backend.herokuapp.com/api/v1/foodItems';
    axios.get(URL)
      .then((response) => {
        this.setState({ foodItems: response.data });

      })
      .catch(function (error) {
        console.log(error);
      });
  }

  addToOrder(keyArg) {
    const order = { ...this.state.order };
    order[keyArg] = order[keyArg] + 1 || 1;
    this.setState({ order });
  }

  render() {
    console.log('order here', this.state.order)
    return (
      <div>
        <ul>
          <div className="chickpea">
            <h2>food items </h2>
            {this.state.foodItems.length < 1 ? <p>loading...</p> : <FoodItemList foodItems={this.state.foodItems} index={this.state.foodItems._id} addToOrder={this.addToOrder.bind(this)} />}
            <ShoppingCart foodItem={this.state.foodItems} order={this.state.order} />
          </div>
        </ul>
      </div>
    );
  }
}
// {this.props.foodItems.map((foodItem, i)=> <li key={i}>{foodItem.name}</li>)}

// {this.state.foodItems.length < 1 ? <p>loading...</p> : <FoodItemList foodItems={this.state.foodItems} />}

export default Shop;
