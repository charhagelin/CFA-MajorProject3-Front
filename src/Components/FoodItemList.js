import React from 'react';
import PropTypes from 'prop-types';
import Shop from './Shop';
import ItemCard from './Card';

const FoodItemList = (props) => {
  return(

        <ul>
          {props.foodItems.map((foodItem, i)=> <ItemCard key={i} foodItem={foodItem} />)}
        </ul>

  )
};



FoodItemList.PropTypes = {
  foodItems: PropTypes.array.isRequired
};

export default FoodItemList;
