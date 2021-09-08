import React from "react";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
<<<<<<< HEAD
    this.state = {
      fullName: "",
      username: "",
      email: "",
      password: "",
    };
=======
    this.state = this.props.formData;
>>>>>>> auth
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
<<<<<<< HEAD
    // .then(() => this.props.history.push("/chirps"));
=======
>>>>>>> auth
  }

  render() {
    return (
<<<<<<< HEAD
      <div className="session-form">
        <h2>Sign Up!</h2>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label>
            Your name
            <input
              type="text"
              value={this.state.fullName}
              onChange={this.handleInput("fullName")}>
              At least 6 characters
            </input>
          </label>

          <label>
            Email
            <input
              type="text"
              value={this.state.email}
              onChange={this.handleInput("email")}
            />
          </label>
          <label>
            Password
=======
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
>>>>>>> auth
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleInput("password")}
<<<<<<< HEAD
            />
          </label>
          <button>Create your Amazon account</button>
        </form>
=======
              className="session-input"
            />
            <button className="session-button">
              Create your Manazon account
            </button>
            <p className="terms">
              By continuing, you agree to Manazon's Conditions of Use and
              Privacy Notice.
            </p>
          </form>
        </div>
>>>>>>> auth
      </div>
    );
  }
}

export default SignupForm;
