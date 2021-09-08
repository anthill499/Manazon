import React from "react";
import NavBarSearchContainer from "./nav_bar_search_container";
class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="nav-bar">
        <img src={window.manazonLogo} id="amazon-logo" />
        <NavBarSearchContainer />
      </div>
    );
  }
}

export default NavBar;
