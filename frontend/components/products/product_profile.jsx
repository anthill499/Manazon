import React from "react";
import LockIcon from "@material-ui/icons/Lock";
import ReviewIndexContainer from "../reviews/review_index_container";
import CreateViewFormContainer from "../reviews/create_review_form_container";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import ArrowBackIosSharpIcon from "@material-ui/icons/ArrowBackIosSharp";
class ProductProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartQuantity: 1,
      ratingsCalculalatedHidden: true,
    };
    this.yellowBar = this.yellowBar.bind(this);
    this.greyBar = this.greyBar.bind(this);
    this.checkCartContent = this.checkCartContent.bind(this);
    this.checkStateForModal = this.checkStateForModal.bind(this);
  }

  // this.props.match.params.productId
  componentDidMount() {
    this.props.fetchProducts();
    this.props.fetchReviews(this.props.match.params.productId);
    this.props.fetchCartItems();
  }

  handleQuantityChange(e) {
    this.setState({ cartQuantity: e.currentTarget.value });
  }

  checkCartContent() {
    let variable = false;
    this.props.allCarts.forEach((cartItem) => {
      if (cartItem.productId === this.props.product.id) {
        variable = true;
      } else {
        false;
      }
    });
    return variable;
  }

  addToCart(e) {
    const { product, currentUserId, allCarts } = this.props;
    e.preventDefault();

    const cartItem = {
      productQuantity: parseFloat(this.state.cartQuantity),
      productId: product.id,
      shopperId: currentUserId,
    };

    let currentCartId;
    allCarts.forEach((cartItem) => {
      if (cartItem.productId === product.id) {
        currentCartId = cartItem.id;
      }
    });

    const placeholder = allCarts.filter(
      (cartItem) => cartItem.id === currentCartId
    );

    const currentQuantity =
      placeholder.length > 0 ? placeholder[0].productQuantity : 0;
    const updatedCartItem = {
      productQuantity:
        parseFloat(this.state.cartQuantity) + parseFloat(currentQuantity),
      productId: product.id,
      shopperId: currentUserId,
      id: currentCartId,
    };
    if (this.checkCartContent()) {
      this.props
        .updateCartItem(updatedCartItem)
        .then(() => this.props.history.push("/cart_items"));
    } else {
      this.props
        .createCartItem(cartItem)
        .then(() => this.props.history.push("/cart_items"));
    }
  }

  handleRatingsModalClick(e) {
    e.stopPropogation;
    const currentModalState = this.state.ratingsCalculalatedHidden;
    this.setState({
      ratingsCalculalatedHidden: !currentModalState,
    });
  }

  checkStateForModal() {
    return this.state.ratingsCalculalatedHidden ? "90deg" : "270deg";
  }
  yellowBar(num) {
    const { reviews } = this.props;
    const newArray = reviews.filter((review) => review.rating === num);
    const result = Math.floor((newArray.length / reviews.length) * 100);
    return result;
  }

  greyBar(num) {
    return 100 - this.yellowBar(num);
  }

  render() {
    if (!this.props.product) return null;
    const { title, price, photoUrl, description, rating } = this.props.product;
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<StarIcon key={i} className="show-stars" />);
      } else {
        stars.push(<StarBorderIcon key={i} className="show-stars" />);
      }
    }

    const howAreRatingsCalculated = this.state
      .ratingsCalculalatedHidden ? null : (
      <div>
        To calculate the overall star rating and percentage breakdown by star,
        we don’t use a simple average. Instead, our system considers things like
        how recent a review is and if the reviewer bought the item on Manazon.
        It also analyzes reviews to verify trustworthiness.
      </div>
    );
    return (
      <div id="product-show-wrapper">
        <img src={window.ad} id="amazon-ad" />
        <div className="product-wrapper">
          <img src={photoUrl} alt="product-img" />
          <div className="product-description-box">
            <div className="product-title">{title}</div>
            <div id="ratings-wrapper">
              <div className="actual-stars">{stars}</div>
              <div className="pay-later-wrapper">
                {this.props.reviews.length} ratings
              </div>
              <div> | </div>
              <div className="pay-later-wrapper">20 answered questions</div>
            </div>
            <div id="choice">
              <div className="manazons-choice">
                <div>
                  Manazon's <span>Choice</span>
                </div>
              </div>
              <div className="choice-triangle"></div>
            </div>
            <div>
              <hr />
            </div>
            <div className="price-container-wrapper">
              <div className="price-container">
                <div className="price-label">Price: </div>
                <div className="actual-price">${price}</div>
                <img src={window.primelogo} id="prime-logo" />
                <div className="price-label-and">{"&"}</div>
                <div className="price-label">FREE Returns</div>
              </div>
              <div className="pay-later-wrapper">
                Pay{" "}
                <span className="pay-later">
                  ${Math.ceil(price / 6)}/month for 6 months
                </span>
                , interest-free upon approval for the Manazon Prime Rewards Visa
                Card
              </div>

              <div className="other-sellers">
                May be available at a lower price from{" "}
                <span>other sellers</span>, potentially without free Prime
                shipping.
              </div>
            </div>
            <div>
              <div className="description-title">About this item</div>
              <div className="actual-description">{description}</div>
            </div>
            <div className="new-and-used">
              <div className="green">
                New {"&"} Used from
                <span className="new-and-used-img">
                  {" "}
                  ${Math.ceil(price * 0.66)}
                </span>
              </div>
              <img src={window.primelogo} id="prime-logo" />
            </div>
          </div>
          <div className="product-checkout-box">
            <span className="actual-price">${price}</span>
            <img src={window.primelogo} id="prime-logo" />
            <div id="free-returns">
              <div className="price-label-and">{"&"}</div>
              <div className="price-label">FREE Returns</div>
            </div>
            <div className="inventory-level">In Stock.</div>
            <div className="free-delivery">
              FREE delivery: <span>Tomorrow</span>
              <div>Order within 1 hr and 2 mins</div>
            </div>
            <div>
              <select
                className="quantity-select"
                onChange={(e) => this.handleQuantityChange(e)}
                value={this.state.cartQuantity}>
                <option value={1} selected>
                  Qty: 1
                </option>
                <option value={2}>Qty: 2</option>
                <option value={3}>Qty: 3</option>
              </select>
            </div>
            <div className="product-checkout-buttons">
              {/* ADD TO CART SECTION */}
              <button
                className="add-to-cart-button"
                onClick={(e) => this.addToCart(e)}>
                Add to cart
              </button>
              <button className="buy-now-button">Buy now</button>
              {/* ADD TO CART SECTION */}
            </div>
            <div className="secure-transaction-wrapper">
              <LockIcon className="lock-icon" />
              <div className="green">Secure Transaction</div>
            </div>
            <div>Ships from and sold by Manazon.com.</div>
            <div>
              <div>Return policy:</div>
              <span className="green">
                Eligible for Return, Refund or Replacement
              </span>
            </div>
            <div>
              Shows what's inside and can’t be hidden. If this is a gift,
              consider shipping to a different address.
            </div>
          </div>
        </div>
        <hr className="product-review-divider" />
        <div className="product-show-reviews-wrapper">
          <div className="product-show-reviews">
            <div id="customer-reviews-title">Customers Reviews</div>
            <div id="stars-in-reviews">
              <div id="stars-and-rating-flex">
                <div>{stars}</div>
                <span>{rating} out of 5</span>
              </div>
              <div id="global-rating">
                {this.props.reviews.length} global ratings
              </div>
              <div>
                <div className="review-boxes">
                  <div className="star-label-wrapper">
                    <span className="star-label">5 star</span>
                    <div className="bars-wrappers">
                      <div
                        className="review-boxes-orange five-star-box"
                        style={{ width: `${this.yellowBar(5.0)}%` }}></div>
                      <div
                        className="review-boxes-grey"
                        style={{ width: `${this.greyBar(5.0)}%` }}></div>
                    </div>
                    <span className="star-label">{this.yellowBar(5.0)}%</span>
                  </div>
                  <div className="star-label-wrapper">
                    <span className="star-label">4 star</span>
                    <div className="bars-wrappers">
                      <div
                        className="review-boxes-orange four-star-box"
                        style={{ width: `${this.yellowBar(4.0)}%` }}></div>
                      <div
                        className="review-boxes-grey"
                        style={{ width: `${this.greyBar(4.0)}%` }}></div>
                    </div>
                    <span className="star-label">{this.yellowBar(4.0)}%</span>
                  </div>
                  <div className="star-label-wrapper">
                    <span className="star-label">3 star</span>
                    <div className="bars-wrappers">
                      <div
                        className="review-boxes-orange three-star-box"
                        style={{ width: `${this.yellowBar(3.0)}%` }}></div>
                      <div
                        className="review-boxes-grey"
                        style={{ width: `${this.greyBar(3.0)}%` }}></div>
                    </div>
                    <span className="star-label">{this.yellowBar(3.0)}%</span>
                  </div>
                  <div className="star-label-wrapper">
                    <span className="star-label">2 star</span>
                    <div className="bars-wrappers">
                      <div
                        className="review-boxes-orange two-star-box"
                        style={{ width: `${this.yellowBar(2.0)}%` }}></div>
                      <div
                        className="review-boxes-grey"
                        style={{ width: `${this.greyBar(2.0)}%` }}></div>
                    </div>
                    <span className="star-label">{this.yellowBar(2.0)}%</span>
                  </div>
                  <div className="star-label-wrapper">
                    <span className="star-label">1 star</span>
                    <div className="bars-wrappers">
                      <div
                        className="review-boxes-orange one-star-box"
                        style={{ width: `${this.yellowBar(1.0)}%` }}></div>
                      <div
                        className="review-boxes-grey"
                        style={{ width: `${this.greyBar(1.0)}%` }}></div>
                    </div>
                    <span className="star-label">{this.yellowBar(1.0)}%</span>
                  </div>
                </div>
              </div>

              <div className="ratings-modal">
                <ArrowBackIosSharpIcon
                  className="ratings-modal-arrow"
                  // style={{ transform: rotate(this.checkStateForModal()) }}
                />
                <div onClick={(e) => this.handleRatingsModalClick(e)}>
                  How are ratings calculated?
                </div>
              </div>
              <div className="rating-modal-dropdown">
                {howAreRatingsCalculated}
              </div>
              {this.props.loggedIn && (
                <CreateViewFormContainer product={this.props.product} />
              )}
            </div>
          </div>
          <ReviewIndexContainer product={this.props.product} />
        </div>
      </div>
    );
  }
}

export default ProductProfile;
