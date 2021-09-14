import React from "react";
import CartIndexItem from "./cart_index_items";
class CartItemsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCartItems();
  }

  Checkout(e) {
    e.preventDefault();
    this.props.cartItems.forEach((item) => {
      this.props.deleteCartItem(item);
    });
  }

  render() {
    if (!this.props.cartItems) return null;
    const cartItemsMapped = this.props.cartItems.map((cartItem, idx) => {
      return <CartIndexItem key={cartItem.id} cartItem={cartItem} />;
    });
    return (
      <div>
        <div>{cartItemsMapped}</div>
        <div>
          <button
            className="checkout-button"
            onClick={(e) => this.handleCheckout(e)}>
            Proceed to checkout
          </button>
        </div>
      </div>
    );
  }
}

export default CartItemsIndex;
