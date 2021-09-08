import React from "react";

class NavBarCategories extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul id="categories-list">
          <li className="hovered-category">All</li>
          <li className="hovered-category">Buy Again</li>
          <li className="hovered-category">Beard Trimmers</li>
          <li className="hovered-category">Body Hair Groomers</li>
          <li className="hovered-category">Beard Conditioners {"&"} Oils</li>
          <li className="hovered-category">Manicure {"&"} Pedicure kits</li>
          <li className="hovered-category">Men's Rotary shavers</li>
        </ul>
      </div>
    );
  }
}

export default NavBarCategories;
