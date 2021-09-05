import React from "react";
class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.searcbData;
  }

  render() {
    return (
      <div>
        {/* logo */}
        <input
          type="text"
          value={this.state.field}
          onChange={(e) => this.setState({ field: e.target.value })}
        />
        <Link to={"/login"}>Sign In</Link>
      </div>
    );
  }
}

export default NavBar;
