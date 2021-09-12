import React from "react";

class ProductProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  // this.props.match.params.productId
  componentDidMount() {
    this.props.fetchProducts();
  }

  // componentWillUnmount() {
  //   this.props.fetchProduct(this.props.match.params.productId);
  // }

  render() {
    if (!this.props.product) return null;
    // debugger;
    const { title, price, photoUrl, description } = this.props.product;
    return (
      <div>
        <img src={window.ad} id="amazon-ad" />
        <div className="product-wrapper">
          <img src={photoUrl} alt="product-img" />
          <div className="product-description-box">
            <div className="product-title">{title}</div>
            <div id="ratings-wrapper">
              <div>⭐⭐⭐⭐⭐</div>
              <div className="pay-later-wrapper">430 ratings</div>
              <div> | </div>
              <div className="pay-later-wrapper">20 answered questions</div>
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
          </div>
          <div className="product-checkout-box">
            <span className="actual-price">${price}</span>
            <img src={window.primelogo} id="prime-logo" />
            <div id="free-returns">
              <div className="price-label-and">{"&"}</div>
              <div className="price-label">FREE Returns</div>
            </div>
            <div>In Stock</div>
            <button>Add to cart</button>
            <button>Buy now</button>
            <div>Secure Transaction</div>
            <div>
              Ships from and sold by Manazon.com.
              <br />
              Return policy: Eligible for Return, Refund or Replacement
            </div>
            <div>
              Shows what's inside and can’t be hidden. If this is a gift,
              consider shipping to a different address.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductProfile;
