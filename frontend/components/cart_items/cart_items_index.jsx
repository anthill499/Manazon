import React from "react";
import CartIndexItem from "./cart_index_items";
class CartItemsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCartItems();
  }

  handleCheckout(e) {
    e.preventDefault();
    this.props.cartItems.forEach((item) => {
      this.props.deleteCartItem(item);
    });
  }

  render() {
    if (!this.props.cartItems) return null;
    const cartItemsMapped = this.props.cartItems.map((cartItem, idx) => {
      console.log(cartItem);
      return (
        <CartIndexItem
          key={cartItem.id}
          cartItem={cartItem}
          fetchCartItem={this.props.fetchCartItem}
          updateCartItem={this.props.updateCartItem}
          currentUserId={this.props.currentUser}
          currentCartId={cartItem.id}
          productId={cartItem.productId}
          productQuantity={cartItem.productQuantity}
          deleteCartItem={this.props.deleteCartItem}
        />
      );
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
