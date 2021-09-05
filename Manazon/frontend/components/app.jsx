import React from "react";
import { AuthRoute } from "../util/route_util";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import { Route, Redirect, withRouter } from "react-router-dom";
const App = () => (
  <div>
    <header>
      <div>Your react is working</div>
    </header>
    <Route exact path="/login" component={LoginFormContainer} />
    <Route exact path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;
