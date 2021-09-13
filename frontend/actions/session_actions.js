import * as SessionApiUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOG_OUT = "LOG_OUT";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const LOG_IN_DEMO = "LOG_IN_DEMO";
export const RECEIVE_A_USER = "RECEIVE_A_USER";
export const fetchUser = (user) => ({
  type: RECEIVE_A_USER,
  user,
});
export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser,
});

export const logoutCurrentUser = () => ({
  type: LOG_OUT,
});

export const receiveSessionErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors,
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
});

export const logout = () => (dispatch) => {
  SessionApiUtil.logout().then((currentUser) =>
    dispatch(logoutCurrentUser(currentUser))
  );
};

export const signup = (user) => (dispatch) => {
  SessionApiUtil.signup(user).then(
    (currentUser) => dispatch(receiveCurrentUser(currentUser)),
    (err) => dispatch(receiveSessionErrors(err.responseJSON))
  );
};

export const login = (user) => (dispatch) => {
  SessionApiUtil.login(user).then(
    (currentUser) => dispatch(receiveCurrentUser(currentUser)),
    (err) => dispatch(receiveSessionErrors(err.responseJSON))
  );
};

export const findUser = (userId) => (dispatch) => {
  SessionApiUtil.findUser(userId).then((user) => dispatch(fetchUser(user)));
};
