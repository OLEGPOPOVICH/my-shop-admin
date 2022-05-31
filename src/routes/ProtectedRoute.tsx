import React from "react";
import { Redirect, Route } from "react-router-dom";

type ProtectedRouteType = {
  isAuth: boolean;
  redirectPath: string;
};

export const ProtectedRoute = ({
  isAuth,
  redirectPath,
  ...routeProps
}: ProtectedRouteType) => {
  if (isAuth) {
    return <Route {...routeProps} />;
  }

  return <Redirect to={redirectPath} />;
};
