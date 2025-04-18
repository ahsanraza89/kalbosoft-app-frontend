import * as jwtDecode from "jwt-decode";

export const getAuthTokenData = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    return { isAuthenticated: false, role: null };
  }

  try {
    const decodedToken  = jwtDecode.jwtDecode(token);

    if (decodedToken.exp * 1000 < Date.now()) {
      localStorage.removeItem("token");
      return { isAuthenticated: false, role: null };
    } else {
      return {
        isAuthenticated: true,
        role: decodedToken.role,
        userId: decodedToken.userId,
        username: decodedToken.username,
        type: decodedToken.type,
      };
    }
  } catch (error) {
    localStorage.removeItem("token");
    return { isAuthenticated: false, role: null };
  }
};