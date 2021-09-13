import React from "react";
import { Link } from "react-router-dom";
class ProductIndexItem extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <div>
        <Link to={`/products/${product.id}`}>
          <img src={product.photoUrl} className="dumbbells" />
        </Link>
        <p>${product.price}</p>
      </div>
    );
  }
}

export default ProductIndexItem;
