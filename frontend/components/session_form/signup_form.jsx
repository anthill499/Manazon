import React from "react";
import { Link } from "react-router-dom";
class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.formData;
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  renderErrors(string) {
    const errorsArr = this.props.errors;
    const renderedArr = [];
    errorsArr.forEach((ele) => {
      if (ele.indexOf(string) !== -1) {
        renderedArr.push(ele);
      }
    });
    if (renderedArr.length !== 0) {
      return (
        <ul>
          {renderedArr.map((error, i) => (
            <li key={`error-${i}`}>{error}</li>
          ))}
        </ul>
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <div>
        <div className="logo-div">
          <Link to="/">
            <img src={window.logo} className="inverted-logo" />
          </Link>
        </div>
        <div className="form-container">
          <div className="session-form">
            <br />
            <h1 className="session-title">Create Account</h1>
            <form onSubmit={(e) => this.handleSubmit(e)}>
              <label className="session-label">Your Name</label>
              <input
                type="text"
                value={this.state.fullName}
                onChange={this.handleInput("fullName")}
                className="session-input"></input>
              <div className="auth-errors">
                {this.renderErrors("Full name")}
              </div>
              <label className="session-label">Username</label>
              <input
                type="text"
                value={this.state.username}
                onChange={this.handleInput("username")}
                className="session-input"></input>
              <div className="auth-errors">{this.renderErrors("Username")}</div>
              <label className="session-label">Email</label>
              <input
                type="email"
                value={this.state.email}
                onChange={this.handleInput("email")}
                className="session-input"
              />
              <label className="session-label">Password</label>
              <input
                type="password"
                value={this.state.password}
                onChange={this.handleInput("password")}
                className="session-input"
                placeholder="At least 6 characters"
              />
              <div className="auth-errors">{this.renderErrors("Password")}</div>
              <br />
              <button className="session-button">
                Create your Manazon account
              </button>
              <br />
              <div className="terms">
                By continuing, you agree to Manazon's <p> Conditions of Use</p>{" "}
                and
                <p> Privacy Notice.</p>
              </div>

              <hr className="solid"></hr>
              <div id="already-have-account">
                <div>Already have an account?</div>
                <p className="link-blue">
                  <Link to="login">Log-In</Link>
                </p>
              </div>
            </form>
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default SignupForm;
