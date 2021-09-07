import React from "react";

const ProductIndexItem = ({ product }) => {
  return (
    <div>
      <li>
        <h1>{product.title}</h1>
        <div>{product.description}</div>
        <div>{product.price}</div>
        <div>{product.inventory}</div>
      </li>
    </div>
  );
};

export default ProductIndexItem;
