import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { Menu } from "@material-ui/core";
class NavBarCategories extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul id="categories-list">
          <li className="hovered-category" id="hamburger">
            <MenuIcon />
            <div>All</div>
          </li>
          <li className="hovered-category">Buy Again</li>
          <li className="hovered-category">Weights</li>
          <li className="hovered-category">
            Training Equipment {"&"} Accessories
          </li>
          <li className="hovered-category">Supplements</li>
          <li className="hovered-category">Meal Plans {"&"} Regiments</li>
          <li className="hovered-category">Community</li>
        </ul>
      </div>
    );
  }
}

export default NavBarCategories;
