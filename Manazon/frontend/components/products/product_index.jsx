import React from "react";
import NavBar from "../nav_bar/nav_bar";
import ProductIndexItem from "./product_index_items";
import NavBarCategories from "../nav_bar/nav_bar_categories";
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
        <div>
          <NavBarCategories />
        </div>
        <div className="mapped-products-index">{mappedProducts}</div>
      </div>
    );
  }
}

export default ProductIndex;
