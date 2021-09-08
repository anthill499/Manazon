import React from "react";
import NavBarSearchContainer from "./nav_bar_search_container";
import Logo from "../../../app/assets/images/logo/Manazonlogo2.png";
class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="nav-bar">
        <img src={Logo} id="amazon-logo" />
        <NavBarSearchContainer />
      </div>
    );
  }
}

export default NavBar;
