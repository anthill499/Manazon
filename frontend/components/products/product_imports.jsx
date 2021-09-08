import React from "react";
import bg from "../../../app/assets/images/logo/groomingbackground.png";
import swipeIcon from "../../../app/assets/images/logo/swipeicon.png";

const ProductImports = () => {
  return (
    <div>
      <img src={bg} className="background-img" />
      <div id="swipers">
        <img src={swipeIcon} className="swipe-icons" id="swipe-left" />
        <img src={swipeIcon} className="swipe-icons" id="swipe-right" />
      </div>
    </div>
  );
};

export default ProductImports;
