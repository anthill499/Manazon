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
import CartItemIndexContainer from "../components/cart_items/cart_items_container";
import SearchIndex from "../components/search/search_index";
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
        <Route exact path="/cart_items" component={CartItemIndexContainer} />
        <Route exact path="/" component={ProductIndexContainer} />
        <Route exact path="/search" component={SearchIndex} />
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
            <h2>My favorite things</h2>
            <ul>
              <li>Music Production</li>
              <li>Hot Pot</li>
              <li>Working Out</li>
              <li>App Academy Cohort Mates</li>
              <li>Hiking</li>
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
            <li>Privacy Notice</li>
            <li>Interest-Based Ads©</li>
            <li>2021, Manazon, Inc. or its affiliates</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default App;
