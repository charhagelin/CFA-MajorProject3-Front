import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

class ItemCard extends Component {
	constructor(props){
		super(props);
	}

	this.foodItem.name = this.foodItem.name.bind(this);


  render() {
    return (
			<div className="flexcontainer">
		    <div className="card">
		        {props.foodItem.name}
						<button onClick={() => this.props.addToOrder(this.props.index)}> Add to cart </button>
		      <div className="overlay">
		        {props.foodItem.description}
						<br/>
		        {props.foodItem.price}
		        {props.foodItem.unit}
		      </div>
		     </div>
	    </div>
    )
 }
};


ItemCard.propTypes = {
	foodItem: PropTypes.object.isRequired
};

export default ItemCard;
