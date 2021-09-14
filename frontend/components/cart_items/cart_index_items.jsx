import React from "react";

class CartIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { price, productId, productQuantity } = this.props.cartItem;
    console.log(this.props.cartItem);
    return (
      <div>
        <div>HELLO</div>
        <div>{productId}</div>
        <div>{price}</div>
        <div>{productQuantity}</div>
      </div>
    );
  }
}

export default CartIndexItem;
