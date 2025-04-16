import React from "react";
import { Navigate } from "react-router-dom";
import { ROUTE_NAMES } from "../constants/routesConstants";

const PrivateRoute = ({
  isAuthenticated,
  role,
  allowedRoles,
  // redirectTo,
  Element,
}) => {
  if (!isAuthenticated) {
    return <Navigate to={ROUTE_NAMES.SIGNUP} />; // Redirect to login or signup
  }
  if (!allowedRoles.includes(role)) {
    return <Navigate to={ROUTE_NAMES.SIGNUP} />; // Show "Not Authorized" message for invalid roles
  }
  return <Element />;
};

export default PrivateRoute;
