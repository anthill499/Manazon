import React from "react";

class NavBarCategories extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul id="categories-list">
          <li>All</li>
          <li>Buy Again</li>
          <li>Beard Trimmers</li>
          <li>Body Hair Groomers</li>
          <li>Beard Conditioners {"&"} Oils</li>
          <li>Manicure {"&"} Pedicure kits</li>
          <li>Men's Rotary shavers</li>
        </ul>
      </div>
    );
  }
}

export default NavBarCategories;
