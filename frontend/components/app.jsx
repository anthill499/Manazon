import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import { useLocation } from "react-router-dom";
import { Route, Redirect, withRouter, Switch } from "react-router-dom";
import ProductIndexContainer from "./products/product_index_container";
import NavBarCategories from "./nav_bar/nav_bar_categories";
import NavBar from "./nav_bar/nav_bar";

const App = ({ store }) => {
  const { pathname } = useLocation();
  return (
    <div>
      {pathname === "/login" || pathname === "/signup" ? null : (
        <div>
          <header id="nav">
            <NavBar />
          </header>
          <div>
            <NavBarCategories />
          </div>
        </div>
      )}
      {/* render only if not the signup, login page */}
      <Switch>
        {/* <Route path="/products/productId" component={} /> */}
        <Route exact path="/" component={ProductIndexContainer} />
      </Switch>
      {/* Protected/ auth routes */}
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </div>
  );
};

export default App;
