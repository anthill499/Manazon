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

    // const updateItemData = {
    //   productQuantity: parseFloat(this.state.potentialQuantity),
    //   productId: productId,
    //   shopperId: currentUserId,
    //   id: currentUserId,
    // };
    return (
      <div>
        <div className="each-cart-item">
          <hr />
          <img
            src={this.props.cartItem.photoUrl}
            alt="no cart item photo here"
            className="cart-product-img"
          />
          <div>
            <div className="product-title">{product.title}</div>
            <div className="cart-in-stock">In Stock.</div>
            <div className="cart-prime-free-return">
              <img src={window.primelogo} id="prime-logo" />
              <div className="price-label-and">{"&"}</div>
              <div className="price-label">FREE Returns</div>
            </div>
          </div>
          <div>Price: {product.price}</div>
          {/* HERE */}
          <div>Quantity: {this.state.potentialQuantity}</div>
          <form>
            <select
              type="submit"
              className="quanity"
              onChange={(e) => this.handleQuantityChange(e)}
              value={this.state.potentialQuantity}>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </form>
          <div>
            <button onClick={(e) => this.handleDelete(e)}>Delete</button>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default CartIndexItem;