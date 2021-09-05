import React from "react";

class ProductIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>Product Index !!!!!!</p>
        <button onClick={(e) => this.props.logout(e)}>Log Out</button>
      </div>
    );
  }
}

export default ProductIndex;
