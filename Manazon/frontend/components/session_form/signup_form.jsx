import React from "react";
import { Link } from "react-router-dom";
class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.formData;
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

  render() {
    return (
      <div className="form-container">
        <div className="session-form">
          <h1 className="session-title">Create Account</h1>
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <label className="session-label">Your Name</label>
            <input
              type="text"
              value={this.state.fullName}
              onChange={this.handleInput("fullName")}
              className="session-input"></input>
            <label className="session-label">Username</label>
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleInput("username")}
              className="session-input"></input>
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
            />
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
            <p id="already-have-account">
              <div>Already have an account?</div>
              <div>
                <Link to="login">Log-In</Link>
              </div>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default SignupForm;
