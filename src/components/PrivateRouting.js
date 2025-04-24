import React from "react";
import { Navigate } from "react-router-dom";
import { ROUTE_NAMES } from "../constants/routesConstants";

const PrivateRoute = ({
  isAuthenticated,
  role,
  allowedRoles,
  Element,
}) => {
  if (!isAuthenticated) {
    return <Navigate to={ROUTE_NAMES.SIGNUP} />; // Redirect to login or signup
  }
  if (!allowedRoles.includes(role)) {
    return <Navigate to={ROUTE_NAMES.NOT_AUTHORIZED} />; // Redirect to "Not Authorized" page
  }
  return <Element />;
};

export default PrivateRoute;
