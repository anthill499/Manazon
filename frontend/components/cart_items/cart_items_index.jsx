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
      <div className="cart-container">
        <div className="cart-item-wrapper">
          <div className="shopping-cart-label">
            <div className="shopping-cart-literal">Shopping Cart</div>
            <div className="cart-select-all-items">Select all items</div>
          </div>
          <hr />
          <div>{cartItemsMapped}</div>
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
