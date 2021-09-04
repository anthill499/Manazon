import * as SessionApiUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOG_OUT = "LOG_OUT";
export const LOG_IN = "LOG_IN";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser,
});

export const logoutCurrentUser = (currentUser) => ({
  type: LOG_OUT,
  currentUser,
});

export const receiveSessionErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors,
});

export const logout = (userId) => (dispatch) => {
  SessionApiUtil.logout(userId).then((currentUser) =>
    dispatch(logoutCurrentUser(currentUser))
  );
};

export const signup = (user) => (dispatch) => {
  SessionApiUtil.signup(user).then((currentUser) =>
    dispatch(receiveCurrentUser(currentUser))
  );
};

export const login = (user) => (dispatch) => {
  SessionApiUtil.login(user).then((currentUser) =>
    dispatch(receiveCurrentUser(currentUser))
  );
};
