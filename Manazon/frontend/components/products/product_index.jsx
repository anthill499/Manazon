import React from "react";
import NavBar from "../nav_bar/nav_bar";
import ProductIndexItem from "./product_index_items";
class ProductIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const mappedProducts = !this.props.allProducts
      ? null
      : this.props.allProducts.map((product, idx) => {
          return <ProductIndexItem product={product} key={idx} />;
        });

    return (
      <div>
        <header id="nav">
          <NavBar />
        </header>
        <div>{mappedProducts}</div>
      </div>
    );
  }
}

export default ProductIndex;
