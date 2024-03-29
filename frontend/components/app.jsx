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
import SearchIndexContainer from "../components/search/search_index_container";
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
        <Route exact path="/search/:query" component={SearchIndexContainer} />
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
            <h2>Some of my Favorite People</h2>
            <ul>
              <li>Richard Leung</li>
              <li>Cindy Jiang</li>
              <li>Christopher Chung</li>
              <li>Alex Lam</li>
              <li>Winnie Ng</li>
              <li>Daniel Mechenko</li>
              <li>Shahdi Qurashi</li>
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
              <li>Richard Leung</li>
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
            <li>
              <a
                href="https://github.com/anthill499"
                target="_blank"
                rel="noopener noreferrer">
                Github
              </a>
            </li>
            <li>
              <a
                href="https://angel.co/u/anthony-huang-8"
                target="_blank"
                rel="noopener noreferrer">
                AngelList
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/anthonyhuang499/"
                target="_blank"
                rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://www.anthonyhuang.dev"
                target="_blank"
                rel="noopener noreferrer">
                Portfolio
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default App;
