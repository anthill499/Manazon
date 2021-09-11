import React from "react";
import ProductIndexItem from "./product_index_items";
import ProductImports from "./product_imports";
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
      <>
        <div>
          <ProductImports />
        </div>
      </>
    );
  }
}

export default ProductIndex;
