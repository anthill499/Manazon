import humps from "humps";
// signup

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
