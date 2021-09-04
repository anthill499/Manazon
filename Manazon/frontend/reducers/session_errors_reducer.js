import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_CURRENT_USER,
} from "../actions/session_actions";

const sessionErrorsReducer = (state = {}, action) => {
  let newState = { ...state };
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return { ...newState, ["errors"]: action.errors };
    case RECEIVE_CURRENT_USER:
      delete newState["errors"];
      return newState;
    default:
      return state;
  }
};

export default sessionErrorsReducer;
