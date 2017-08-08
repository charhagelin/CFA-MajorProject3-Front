import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';


const ItemCard = (props) => {
	return (
		<div className="flexcontainer">
			<div className="card">
				{props.foodItem.name}
				<button onClick={() => props.addToOrder(props.foodItem._id)}> Add to cart </button>
				{props.foodItem.length}
				<div className="overlay">
					{props.foodItem.description}
					<br />


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
