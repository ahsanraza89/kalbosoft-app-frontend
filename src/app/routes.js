import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { PUBLIC_ROUTE, PRIVATE_ROUTES, ROUTE_NAMES } from '../constants/routesConstants';
import PrivateRoute from '../components/PrivateRouting';

export default function routes() {
  const isAuthenticated = false; // Replace with your authentication logic
  const role = 'admin'; // Replace with your role logic

  return (
    <Routes>
      {
        PRIVATE_ROUTES.map((value, i) => (
          <Route
            path={value.path}
            key={i}
            element={
              <PrivateRoute
                isAuthenticated={isAuthenticated}
                role={role}
               allowedRoles={value.role} 
                // redirectTo={ROUTE_NAMES.SIGNUP} // Redirect to login if not authenticated
                Element={value.element}
              />
            }
          />
        ))
      }
      {
        PUBLIC_ROUTE.map((value, i) => (
          <Route
            path={value.path}
            key={i}
            element={
              !isAuthenticated ? (
                <value.element />
              ) : (
                <Navigate to={ROUTE_NAMES.HOME} />
              )
            }
          />
        ))
      }
    </Routes>
  );
}
