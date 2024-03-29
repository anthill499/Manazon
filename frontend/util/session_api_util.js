// signup
import humps from "humps";
export const signup = (user) => {
  const humpedUser = humps.decamelizeKeys(user);
  return $.ajax({
    method: "POST",
    url: "/api/users",
    data: { user: humpedUser },
  });
};

// login
export const login = (user) => {
  const humpedUser = humps.decamelizeKeys(user);
  return $.ajax({
    method: "POST",
    url: "/api/session",
    data: { user: humpedUser },
  });
};

// logout
export const logout = () => {
  return $.ajax({
    method: "DELETE",
    url: `/api/session/`,
  });
};

export const findUser = (userId) => {
  return $.ajax({
    method: "get",
    url: `/api/users/${userId}`,
  });
};
