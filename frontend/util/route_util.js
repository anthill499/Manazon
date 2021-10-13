import React from "react";
import { connect } from "react-redux";
import { Route, Redirect, withRouter } from "react-router-dom";

const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={(props) =>
      !loggedIn ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

export const ProtectedRoute = ({
  component: Component,
  path,
  loggedIn,
  exact,
}) => {
  if (loggedIn) {
    return <Redirect to="/lobby" />;
  } else {
    return <Component path={path} />;
  }
};

const mapStateToProps = (state) => ({
  loggedIn: Boolean(state.session.id),
  // currentPath: ownProps.path,
});

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));

// export const ProtectedRoute = withRouter(
//   connect(mapStateToProps, null)(Protected)
// );
