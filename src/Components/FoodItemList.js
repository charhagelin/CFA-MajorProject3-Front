import React from 'react';
import PropTypes from 'prop-types';
import ItemCard from './ItemCard';

const FoodItemList = (props) => {
  console.log('id', props.foodItems[1]._id)
  return (
    <ul>
      {props.foodItems.map((foodItem, i) => <ItemCard key={i} index={props.foodItems[i]._id} foodItem={foodItem} addToOrder={props.addToOrder.bind(this)} />)}
    </ul>
  )
};



FoodItemList.PropTypes = {
  foodItems: PropTypes.array.isRequired
};

export default FoodItemList;
