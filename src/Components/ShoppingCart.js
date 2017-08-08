import React, { Component } from 'react';

class ShoppingCart extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     order: []
  //   }
  // }

  render() {
    const orderIds = this.props.order; //sätt in objects with keys för att få den att visas. se wesbos 

    console.log('order in cart', this.props.order)
    return (
      <div>

        <p>{orderIds}</p>


      </div>
    )
  }
}
export default ShoppingCart;
