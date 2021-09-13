import React from "react";
import { Link } from "react-router-dom";
import NavBarModalContainer from "./nav_modal_container";

class NavBarSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = Object.assign(this.props.formData, { hidden: false });
  }

  handleFocusOrBlur(e) {
    const newState = !this.state.hidden;
    this.setState({ hidden: newState });
  }

  render() {
    const user = this.props.currentUser;
    const name = user ? user.fullName.split(" ")[0] : "Sign in";
    const helloOrDeliver = user ? `Deliver to ${name}` : "Hello";
    return (
      <div className="nav-bar-search">
        <div id="select-address">
          <div>
            <img src={window.pin} id="nav-pin" />
          </div>
          <div>
            <p className="nav-grey">{helloOrDeliver}</p>
            Select your address
          </div>
        </div>

        <div id="nav-bar-search-group">
          <select className="nav-bar-search-select">
            <option value="0">All: </option>
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
        <div id="modal-trigger" onClick={(e) => this.handleFocusOrBlur(e)}>
          <div id="account-lists">
            <div>
              <p className="nav-grey">Hello, {name}</p>
            </div>
            <div>Account {"&"} Lists</div>
          </div>
          {!this.state.hidden ? null : <NavBarModalContainer />}
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
