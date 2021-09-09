import React from "react";

const ProductImports = () => {
  return (
    <div>
      <img src={window.bg} className="background-img" />
      <div id="swipers">
        <img src={window.swipeIcons} className="swipe-icons" id="swipe-left" />
        <img src={window.swipeIcons} className="swipe-icons" id="swipe-right" />
      </div>
    </div>
  );
};

export default ProductImports;
