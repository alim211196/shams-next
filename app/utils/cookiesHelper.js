import Cookies from "js-cookie";

// Set token on login
export const handleLogin = (token) => {
  Cookies.set("token", token, { expires: 7, path: "/" });
};

// Remove token on logout
export const handleLogout = () => {
  Cookies.remove("token");
};
