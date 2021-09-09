import React from "react";

const ProductIndexItem = ({ product }) => {
  return (
    <div className="product__container">
      <img
        className="product__componentImage"
        src="https://m.media-amazon.com/images/I/61syYvz7BJL._AC_SL1500_.jpg"
      />
      <span className="product__componentTitle">
        Hidden Camera - 1080P Spy Camera with Audio and Video - Mini Nanny Cam -
        Portable Motion Detection Small HD Secret Surveillance Camera Charger
      </span>
      <div className="product__componentRating">{product.rating}</div>
      <span className="product__componentPrice">{product.price}</span>
      <div className="product__componentCartContainer">
        <button className="product__componentCart">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductIndexItem;
