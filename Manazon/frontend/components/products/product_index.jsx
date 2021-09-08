import React from "react";
import NavBar from "../nav_bar/nav_bar";
class ProductIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <header id="nav">
          <NavBar />
        </header>
        <p>Product Index !!!!!!</p>
      </div>
    );
  }
}

export default ProductIndex;
