import React from "react";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      username: "",
      email: "",
      password: "",
    };
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
    // .then(() => this.props.history.push("/chirps"));
  }

  render() {
    return (
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
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleInput("password")}
            />
          </label>
          <button>Create your Amazon account</button>
        </form>
      </div>
    );
  }
}

export default SignupForm;
