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
  //     console.log(this.state);
  //   }
  //   this.setState({ searchArray: searchResults }, () =>
  //     console.log(this.state)
  //   );
  //   // console.log(searchResults); // works, array shows up
  // }

  handleSearch(e) {
    console.log(this.state.query);
    this.props
      .fetchSearchedProducts(this.state.query)
      .then((res) => this.props.history.push("/search"));
  }

  render() {
    const user = this.props.currentUser;
    const name = user ? user.fullName.split(" ")[0] : "Sign in";
    const helloOrDeliver = user ? `Deliver to ${name}` : "Hello";
    return (
      <div className="nav-bar-search">
        <div id="select-address" className="nav-hover">
          <div className="nav-hover">
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
          onClick={(e) => this.handleFocusOrBlur(e)}
          className="nav-hover">
          <div id="account-lists">
            <div>
              <p className="nav-grey">Hello, {name}</p>
            </div>
            <div>Account {"&"} Lists</div>
          </div>
          {!this.state.hidden ? null : <NavBarModalContainer />}
        </div>
        <div className="nav-hover">
          <p className="nav-grey">Returns</p>
          {/* <br /> */}
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
