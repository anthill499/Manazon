import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import { Route, Redirect, withRouter, Switch } from "react-router-dom";
import ProductIndexContainer from "./products/product_index_container";
const App = () => (
  <div>
    {/* render only if not the signup, login page */}
    <Switch>
      <Route exact path="/" component={ProductIndexContainer} />
    </Switch>
    {/* Protected/ auth routes */}
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;
