import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import { useLocation } from "react-router-dom";
import { Route, Redirect, withRouter, Switch } from "react-router-dom";
import ProductIndexContainer from "./products/product_index_container";
import NavBarCategories from "./nav_bar/nav_bar_categories";
import NavBar from "./nav_bar/nav_bar";
import ProductProfileContainer from "./products/product_profile_container";
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
        <Route
          path="/products/:productId"
          component={ProductProfileContainer}
        />
        <Route exact path="/" component={ProductIndexContainer} />
      </Switch>

      {/* Protected/ auth routes */}
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <footer id="footer">
        <div className="back-to-top">
          <p>Back to top</p>
        </div>
        <div className="extra-links">
          <div>
            <h2>Get to know Us</h2>
            <ul>
              <li>Careers</li>
              <li>Blog</li>
              <li>About Manazon</li>
              <li>Press Center</li>
              <li>Investor Relations</li>
              <li>Manazon Devices</li>
            </ul>
          </div>
          <div>
            <h2>Make money with us</h2>
            <ul>
              <li>Sell products on Amazon</li>
              <li>Sell apps on Amazon</li>
              <li>Become an Affiliate </li>
              <li>Become a Delivery Driver </li>
              <li>Start a package delivery business</li>
            </ul>
          </div>

          <div>
            <h2>Let Us Help You</h2>
            <ul>
              <li>Amazon and COVID-19</li>
              <li>Your Account</li>
              <li>Your Orders</li>
              <li>Shipping Rates {"&"} Policies</li>
              <li>Amazon Prime</li>
            </ul>
          </div>

          <div>
            <h2>Technologies Used</h2>
            <ul>
              <li>Ruby on Rails</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>PostgreSQL</li>
            </ul>
          </div>
        </div>
        <div className="extra-links-two">
          <ul>
            <li>Conditions of Use</li>
            <li>Privary Notice</li>
            <li>Interest-Based Ads©</li>
            <li>2021, Manazon.heroku.app, Inc. or its affiliates</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default App;
