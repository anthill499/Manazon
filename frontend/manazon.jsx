import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";
import { signup, login, logout } from "./actions/session_actions";
import { fetchProducts } from "./actions/products_actions";
document.addEventListener("DOMContentLoaded", () => {
  let store;
  let preloadedState = undefined;
  if (window.currentUser) {
    preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser },
      },
      session: {
        id: window.currentUser.id,
      },
    };
  }

  store = configureStore(preloadedState);
  const root = document.getElementById("root");
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  window.dispatch = store.dispatch;
  window.getState = store.getState;
  window.fetchProducts = fetchProducts;
  ReactDOM.render(<Root store={store} />, root);
});
