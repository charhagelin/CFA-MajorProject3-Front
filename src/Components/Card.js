import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

const ItemCard = (props) => {
	return (
    <div className="flexcontainer">
    <div className="card">
        {props.foodItem.name}
      <div className="overlay">
        {props.foodItem.description}
        {props.foodItem.price}
        {props.foodItem.unit}
      </div>
      </div>
    </div>
	)
};

ItemCard.propTypes = {
	foodItem: PropTypes.object.isRequired
};

export default ItemCard;
