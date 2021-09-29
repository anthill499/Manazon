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

  calculateSubtotal() {
    let subtotal = 0;
    this.props.cartItems.forEach((item) => {
      subtotal += item.productQuantity * item.product.price;
    });
    return subtotal;
  }

  render() {
    const cartItemsMapped =
      this.props.cartItems.length === 0 ? (
        <div className="shopping-cart-literal">Your Manazon Cart is empty</div>
      ) : (
        this.props.cartItems.map((cartItem, idx) => {
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
              cartItemsLength={this.props.cartItems.length}
            />
          );
        })
      );

    return (
      <div>
        <div className="cart-container">
          <div className="cart-item-wrapper">
            <div className="shopping-cart-label">
              <div className="shopping-cart-literal">Shopping Cart</div>
              <div className="cart-select-all-items">Select all items</div>
            </div>
            <hr />
            <div>{cartItemsMapped}</div>
            <div className="checkout-box-wrapper">
              <div className="cart-subtotal">
                Subtotal: <span>({this.props.cartItems.length} Items) </span>
                <span>${this.calculateSubtotal().toFixed(2)}</span>
              </div>
            </div>
          </div>
          <div className="checkout-button-container">
            <div className="cart-subtotal-part-two">
              Subtotal <span>({this.props.cartItems.length} Items): </span>
              <span style={{ fontWeight: "bold" }}>
                ${this.calculateSubtotal().toFixed(2)}
              </span>
            </div>
            <button
              className="checkout-button"
              onClick={(e) => this.handleCheckout(e)}>
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CartItemsIndex;
