import { createStore, applyMiddleware } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";

import rootReducer from "../reducers/root_reducer";
import thunk from "../thunk/thunk";

const configureStore = (preloadedState = {}) => {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk, logger)
  );
};

export default configureStore;
