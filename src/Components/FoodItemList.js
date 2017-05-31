import React from 'react';
import PropTypes from 'prop-types';
import Shop from './Shop';

const FoodItemList = (props) => {
  return(
    <ul>
      {props.foodItems.map((foodItem, i)=> <li key={i}>{foodItem.name}</li>)}
    </ul>
  )
};



FoodItemList.PropTypes = {
  foodItems: PropTypes.array.isRequired
};

export default FoodItemList;
