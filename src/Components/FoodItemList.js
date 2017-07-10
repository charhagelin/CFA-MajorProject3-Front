import React from 'react';
import PropTypes from 'prop-types';
import ItemCard from './ItemCard';

const FoodItemList = (props) => {
  return (
    <ul>
      {props.foodItems.map((foodItem, i)=> <ItemCard key={i} index={props._id} foodItem={foodItem} addToOrder={props.addToOrder.bind(this)} />)}
    </ul>
  )
};



FoodItemList.PropTypes = {
  foodItems: PropTypes.array.isRequired
};

export default FoodItemList;
