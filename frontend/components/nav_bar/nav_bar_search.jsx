import React from "react";
import { Link } from "react-router-dom";
import NavBarModalContainer from "./nav_modal_container";
import { Redirect } from "react-router-dom";
class NavBarSearch extends React.Component {
  constructor(props) {
    super(props);
    // this.state = Object.assign(this.props.formData, { hidden: false });
    this.state = { query: "", hidden: false };
  }

  componentDidMount() {
    this.props.fetchCartItems();
  }

  handleFocusOrBlur(e) {
    const newState = !this.state.hidden;
    this.setState({ hidden: newState });
  }

  handlePressEnter(e) {
    if (e.key === "Enter") {
      this.handleSearch(e);
    }
  }
  // handleSearch() {
  //   const searchResults = [];
  //   const keywords = this.state.query.toLowerCase().split(" ");
  //   keywords.forEach((word) => {
  //     this.props.ProductIndex.forEach((product) => {
  //       if (product.title.toLowerCase().indexOf(word) !== -1)
  //         searchResults.push(product);
  //     });
  //   });
  //   {
  //   }
  //   this.setState({ searchArray: searchResults });
  // }

  handleSearch(e) {
    this.props
      .fetchProducts(this.state.query)
      .then((res) => this.props.history.push(`/search/${this.state.query}`));
  }

  render() {
    const user = this.props.currentUser;
    const name = user ? user.fullName.split(" ")[0] : "Sign in";
    const helloOrDeliver = user ? `Deliver to ${name}` : "Hello";
    return (
      <div className="nav-bar-search">
        <div>
          <Link to="/">
            <img src={window.manazonLogo} id="amazon-logo" />
          </Link>
        </div>
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
            name="query"
            type="text"
            value={this.state.query}
            onChange={(e) => this.setState({ query: e.target.value })}
            placeholder="Search Manazon.."
            id="nav-bar-search-bar"
            onKeyUp={(e) => this.handlePressEnter(e)}
          />
          {/* add functionality, database requests go here */}
          <button
            className="nav-bar-search-button"
            onClick={(e) => this.handleSearch(e)}>
            <img src={window.mag} id="mag" />
          </button>
        </div>
        <div
          id="modal-trigger"
          onMouseEnter={(e) => this.handleFocusOrBlur(e)}
          onMouseLeave={(e) => this.handleFocusOrBlur(e)}
          className="nav-hover">
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
          {"&"} Orders
        </div>

        <div className={("shopping-cart", "nav-hover")}>
          <Link to="/cart_items">
            <div id="cart-item-count">{this.props.allCartItems.length}</div>
            <img src={window.cart} id="nav-cart" />
          </Link>
        </div>
      </div>
    );
  }
}

export default NavBarSearch;
