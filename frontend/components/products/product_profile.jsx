import React from "react";

class ProductProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.productId);
  }

  render() {
    if (!this.props.product) return null;
    const { title, price, photoUrl, description } = this.props.product;
    return (
      <div>
        <img src={window.ad} id="amazon-ad" />
        <div className="product-wrapper">
          <img src={photoUrl} alt="produt-img" />
          <div className="product-description-box">
            <div className="product-title">{title}</div>
            <div>⭐⭐⭐⭐⭐</div>
            <hr />
            <div>
              <div>Price: ${price}</div>
              <img src={window.prime} />
            </div>
            <div>
              <div>About this item</div>
              <div>{description}</div>
            </div>
          </div>
          <div className="product-checkout-box">
            <span>${price}</span>
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
