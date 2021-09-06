import React from "react";
import { Link } from "react-router-dom";
class LoginForm extends React.Component {
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

  loginDemo(e) {
    e.preventDefault();
    const demoUser = { email: "demouser@manazon.com", password: "demouser123" };
    this.setState(demoUser);
    this.props.processForm(demoUser);
  }

  render() {
    return (
      <div className="form-container">
        <div className="session-form">
          <h1 className="session-title">Sign-In</h1>
          <form>
            <label htmlFor="email" className="session-label">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={this.state.email}
              onChange={this.handleInput("email")}
              className="session-input"></input>
            <label htmlFor="password" className="session-label">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={this.state.password}
              onChange={this.handleInput("password")}
              className="session-input"
            />
            <br />
            <button
              onClick={(e) => this.handleSubmit(e)}
              className="session-button">
              Sign-In
            </button>
            <br />
            <div className="terms">
              By continuing, you agree to Manazon's <p> Conditions of Use</p>{" "}
              and
              <p> Privacy Notice.</p>
            </div>
          </form>
        </div>

        <p className="form-divider">New to Manazon?</p>

        <Link to="/signup">
          <button className="demo-button">Create your Manazon Account</button>
        </Link>

        <button onClick={(e) => this.loginDemo(e)} className="demo-button">
          Log In as Demo
        </button>
      </div>
    );
  }
}

export default LoginForm;
