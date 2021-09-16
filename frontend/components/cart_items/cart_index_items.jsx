import React from "react";

class CartIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      potentialQuantity: this.props.productQuantity,
      productId: this.props.productId,
      shopperId: this.props.currentUserId,
      id: this.props.currentCartId,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    // this.props.updateCartItem(this.state);
    // debugger;
    if (prevState.potentialQuantity !== this.state.potentialQuantity) {
      this.props.updateCartItem(this.state);
    }
  }

  handleQuantityChange(e) {
    // e.preventDefault();
    this.setState({
      potentialQuantity: parseInt(e.currentTarget.value),
    });
  }

  handleDelete(e) {
    // e.preventDefault();
    this.props.deleteCartItem(this.state);
  }

  // Promise<any> {
  // // this should return a promise
  // // make sure , you are returning promise from here
  // return this.http.get(url)
  //            .toPromise()
  //            .then(response => response.json().data)
  //            .catch(this.handleError);

  render() {
    const {
      productId,
      productQuantity,
      product,
      updateCartItem,
      currentUserId,
    } = this.props.cartItem;
    return (
      <div>
        <div id="cart-item-parent">
          <div>
            <div className="each-cart-item">
              <img
                src={this.props.cartItem.photoUrl}
                alt="no cart item photo here"
                className="cart-product-img"
              />
              <div className="cart-item-details-wrapper">
                <div className="product-title">{product.title}</div>
                <div className="cart-in-stock">In Stock.</div>
                <div className="cart-prime-free-return">
                  <img src={window.primelogo} id="prime-logo" />
                  <div className="price-label-and">{"&"}</div>
                  <div className="price-label">FREE Returns</div>
                </div>
                <div className="cart-dropdown-delete-button-wrapper">
                  <div className="cart-quantity-dropdown-wrapper">
                    <form>
                      <select
                        type="submit"
                        className="cart-quantity-dropdown"
                        onChange={(e) => this.handleQuantityChange(e)}
                        value={this.state.potentialQuantity}>
                        <option value={1}>Qty: 1</option>
                        <option value={2}>Qty: 2</option>
                        <option value={3}>Qty: 3</option>
                        <option value={4}>Qty: 4</option>
                        <option value={5}>Qty: 5</option>
                      </select>
                    </form>
                  </div>
                  <div className="cart-product-quantity">
                    Quantity: {this.state.potentialQuantity}
                  </div>
                  <button
                    onClick={(e) => this.handleDelete(e)}
                    className="cart-delete-button">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="cart-product-price">${product.price}</div>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default CartIndexItem;
