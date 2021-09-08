import React from "react";
import { Link } from "react-router-dom";

class NavBarModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.hidden;
  }

  componentWillUnmount() {
    this.setState({ hidden: true });
  }

  render() {
    const button1 = this.props.currentUser ? (
      <button>
        <li onClick={(e) => this.props.logout(e)}>Sign Out</li>
      </button>
    ) : (
      <div>
        <button>
          <Link to="/login">Sign In</Link>
        </button>
        <button>
          <Link to="/signup">Sign Up</Link>
        </button>
      </div>
    );

    return (
      <div>
        <div id="pointer"></div>
        <div className="nav-bar-login">
          <div className="modal-signin">{button1}</div>
          <div id="modal-list">
            <div className="modal-content">
              <p>Your Account</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBarModal;
