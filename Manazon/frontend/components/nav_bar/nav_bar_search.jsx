import React from "react";
import { Link } from "react-router-dom";
import pin from "../../../app/assets/images/logo/pin-removebg-preview.png";
import cart from "../../../app/assets/images/logo/cart.png";
class NavBarSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.formData;
  }

  render() {
    const user = this.props.currentUser;
    const name = user ? user.fullName.split(" ")[0] : "Sign in";
    const loginButtons = this.props.currentUser ? null : (
      <div>
        <div>
          <Link to="/login">Log In</Link>
        </div>
        <div>
          <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    );
    return (
      <div className="nav-bar-search">
        <div>
          <img src={pin} id="nav-pin" />
          Hello
          <br />
          Select your address
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
          <button className="nav-bar-search-button">Search</button>
        </div>
        {user && <button onClick={(e) => this.props.logout(e)}>Log Out</button>}

        <div>
          Hello, {name}
          <br />
          Account {"&"} Lists
        </div>

        <div>
          Returns
          <br />
          {"&"} Orders
        </div>

        <div>
          Cart
          <img src={cart} id="nav-cart" />
        </div>

        <div>{loginButtons}</div>
      </div>
    );
  }
}

export default NavBarSearch;
