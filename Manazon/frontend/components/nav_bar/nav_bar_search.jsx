import React from "react";
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
        <select className="nav-bar-search-select">
          <option value="0"> All: </option>
          <option value="1">BOOTY</option>
          <option value="2">BUTT</option>
          <option value="3">YEHUDA</option>
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
        {user && <button onClick={(e) => this.props.logout(e)}>Log Out</button>}
        <div>
          Hello, {name}
          <br />
          Account {"&"} Lists
        </div>
      </div>
    );
  }
}

export default NavBarSearch;
