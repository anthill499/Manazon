import React from "react";
import { Link } from "react-router-dom";

class NavBarModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hidden: true };
  }

  componentWillUnmount() {
    this.setState({ hidden: true });
  }

  render() {
    const button1 = this.props.currentUser ? (
      <div className="auth-modal">
        <button onClick={(e) => this.props.logout(e)}> Sign Out</button>
      </div>
    ) : (
      <div className="auth-modal">
        <Link to="/login">Sign In</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
    );

    return (
      <div id="modal-hider">
        <div id="pointer"></div>
        <div className="nav-bar-login">
          <div className="modal-signin">{button1}</div>
          <div id="modal-list">
            <div className="modal-content">
              <h2>Your Account</h2>
              <ul>
                <li>Account</li>
                <li>Orders</li>
                <li>Recommendations</li>
                <li>Browsing History</li>
                <li>Watchlist</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBarModal;
