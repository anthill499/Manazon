import React from "react";
import { Link } from "react-router-dom";

class NavBarModal extends React.Component {
  constructor(props) {
    super(props);
    // this.state = this.props.hidden;
  }

  //   componentWillUnmount() {
  //     this.setState({ hidden: true });
  //   }

  render() {
    const loginButton = this.props.currentUser ? null : (
      <button>
        <Link to="/login">Sign In</Link>
      </button>
    );

    const signOutLink = !this.props.currentUser ? null : (
      <button>
        <li onClick={(e) => this.props.logout(e)}>Sign Out</li>
      </button>
    );

    return (
      <div className="nav-bar-login">
        <div className="modal-signin">{loginButton}</div>
        <div id="modal-list">
          <div>
            <h3>Your Lists</h3>
            <li>Create a list</li>
            <li>Find a list or Registry</li>
            <li>ManazonSmile Charity Lists</li>
          </div>

          <div>
            <h3>Your Account</h3>
            <li>Account</li>
            <li>Orders</li>
            <li>Recommendations</li>
            <li>Browsing History</li>
            <li>Watchlist</li>
            <li>Video Purchases {"&"} Rentals</li>
            <li>Membership {"&"} Subscriptions</li>
            <li>Prime Membership</li>
            <li>Manazon Credit Cards</li>
            <li>Music Library</li>
            <li>Start a Selling Account</li>
            <li>Register for a business account</li>
            {signOutLink}
          </div>
        </div>
      </div>
    );
  }
}

export default NavBarModal;
