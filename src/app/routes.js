import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { PUBLIC_ROUTE, PRIVATE_ROUTES, ROUTE_NAMES } from '../constants/routesConstants';
import PrivateRoute from '../components/PrivateRouting';
import { getAuthTokenData } from '../service/token';

export default function Index() {
  const role = 'admin'; // Replace with your role logic

  const { isAuthenticated } = getAuthTokenData();


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
