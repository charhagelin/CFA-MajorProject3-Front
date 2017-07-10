import React, { Component } from 'react';

class ShoppingCart extends Component {
  render() {
    console.log(this.props.order)
    return(
      <div>
        <p>{this.props.order}</p>
      </div>
    )
  }
}
 export default ShoppingCart;
