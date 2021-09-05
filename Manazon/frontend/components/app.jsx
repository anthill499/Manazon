import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import { Route, Redirect, withRouter, Switch } from "react-router-dom";
import ProductIndexContainer from "./products/product_index_container";
import NavBarContainer from "./nav_bar/nav_bar_container";
const App = () => (
  <div>
    <header>
      <div>Your react is working</div>
      <NavBarContainer />
    </header>
    {/* Should be protected/ auth routes */}
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
    <ProtectedRoute exact path="/" component={ProductIndexContainer} />
  </div>
);

export default App;
