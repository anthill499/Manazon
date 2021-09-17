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
        <button onClick={(e) => this.props.logout(e)} className="modal-signin">
          {" "}
          Sign Out
        </button>
      </div>
    ) : (
      <div className="auth-modal">
        <Link to="/login">
          <button>Log In</button>
        </Link>
        <div className="auth-modal-child">
          New Customer?{" "}
          <Link to="/signup" className="start-here">
            <span>Start Here</span>
          </Link>
        </div>
      </div>
    );

    return (
      <div id="modal-hider">
        <div id="pointer"></div>
        <div className="nav-bar-login">
          <div>{button1}</div>
          <div id="modal-list">
            <div className="modal-content">
              {this.props.currentUser && (
                <div>
                  <h2>Your Account</h2>
                  <br />
                  <ul>
                    <li>Account</li>
                    <li>Orders</li>
                    <li>Recommendations</li>
                    <li>Browsing History</li>
                    <li>Watchlist</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBarModal;
