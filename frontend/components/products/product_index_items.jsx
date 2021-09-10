import React from "react";

const ProductIndexItem = ({ product }) => {
  return (
    <div className="product__container">
      {/* {console.log(product.photoUrl)} */}
      <img src={product.photoUrl} alt="product-image" />
      <div>{product.title}</div>
      <div>{product.description}</div>
      <div>{product.price}</div>
      <div>{product.rating}</div>
    </div>
  );
};

export default ProductIndexItem;
