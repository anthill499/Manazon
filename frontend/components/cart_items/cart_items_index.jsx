import React from "react";
import CartIndexItem from "./cart_index_items";
class CartItemsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      purchased: false,
    };
  }

  componentDidMount() {
    this.props.fetchCartItems();
  }

  handleCheckout(e) {
    e.preventDefault();
    this.props.cartItems.forEach((item) => {
      this.props.deleteCartItem(item);
    });
    this.setState({ purchased: true });
  }

  calculateSubtotal() {
    let subtotal = 0;
    this.props.cartItems.forEach((item) => {
      subtotal += item.productQuantity * item.product.price;
    });
    return subtotal;
  }

  render() {
    const emptyOrPurchased = !this.state.purchased ? (
      <div className="shopping-cart-literal">Your Manazon Cart is empty</div>
    ) : (
      <div>
        <div className="purchase-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="green"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-check-circle">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
          <div className="thank-you">Thank you for your purchase!</div>
        </div>
        <p>An email confirmation has been sent to you.</p>
      </div>
    );

    const cartItemsMapped =
      this.props.cartItems.length === 0
        ? emptyOrPurchased
        : this.props.cartItems.map((cartItem, idx) => {
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
                photoUrl={cartItem.photoUrl}
              />
            );
          });

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
            {/* <div>hello</div> */}
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
