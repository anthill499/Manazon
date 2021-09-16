import React from "react";
import ProductIndexItem from "./product_index_items";

class ProductIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const { allProducts } = this.props;
    if (allProducts.length === 0 || !allProducts) return null;
    return (
      <div id="import-div">
        <div id="index-title">
          <h1>"Alexa, show me the gains"</h1>
          <h1>Blink Indoor</h1>
        </div>
        <div className="product-showings-group">
          <div className="product-group">
            <h1>Customer's Most-Loved</h1>
            <div className="four-pics-group">
              <ProductIndexItem product={allProducts[0]} />
              <ProductIndexItem product={allProducts[1]} />
            </div>
            <div className="four-pics-group">
              <ProductIndexItem product={allProducts[2]} />
              <ProductIndexItem product={allProducts[3]} />
            </div>
          </div>
          <div className="product-group">
            <h1>Back to School fashion</h1>
            <div className="four-pics-group">
              <ProductIndexItem product={allProducts[4]} />
              <ProductIndexItem product={allProducts[5]} />
            </div>
            <div className="four-pics-group">
              <ProductIndexItem product={allProducts[6]} />
              <ProductIndexItem product={allProducts[7]} />
            </div>
          </div>
          <div className="product-group">
            <h1>Stock up for college</h1>
            <div className="four-pics-group">
              <ProductIndexItem product={allProducts[8]} />
              <ProductIndexItem product={allProducts[9]} />
            </div>
            <div className="four-pics-group">
              <ProductIndexItem product={allProducts[10]} />
              <ProductIndexItem product={allProducts[11]} />
            </div>
          </div>
        </div>
        <img src={window.bg} className="background-img" />
        <div id="swipers">
          <img
            src={window.swipeIcons}
            className="swipe-icons"
            id="swipe-left"
          />
          <img
            src={window.swipeIcons}
            className="swipe-icons"
            id="swipe-right"
          />
        </div>
      </div>
    );
  }
}

export default ProductIndex;
