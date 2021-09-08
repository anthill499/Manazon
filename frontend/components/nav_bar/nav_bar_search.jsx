import React from "react";
import { Link } from "react-router-dom";
class NavBarSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.formData;
  }

  render() {
    const user = this.props.currentUser;
    const name = user ? user.fullName.split(" ")[0] : "Sign in";

    return (
      <div className="nav-bar-search">
        <div id="select-address">
          <div>
            <img src={window.pin} id="nav-pin" />
          </div>
          <div>
            <p className="nav-grey">Hello</p>
            Select your address
          </div>
        </div>

        <div id="nav-bar-search-group">
          <select className="nav-bar-search-select">
            <option value="0"> All: </option>
          </select>
          <input
            type="text"
            value={this.state.query}
            onChange={(e) => this.setState({ query: e.target.value })}
            placeholder="Search Manazon.."
            id="nav-bar-search-bar"
          />
          {/* add functionality, database requests go here */}
          <button className="nav-bar-search-button">
            <img src={window.mag} id="mag" />
          </button>
        </div>

        <div>
          <p className="nav-grey">Hello, {name}</p>
          Account {"&"} Lists
        </div>
        <div>
          <p className="nav-grey">Returns</p>
          {/* <br /> */}
          {"&"} Orders
        </div>

        <div>
          <div id="cart-item-count">0</div>
          Cart
          <img src={window.cart} id="nav-cart" />
        </div>
      </div>
    );
  }
}

export default NavBarSearch;
