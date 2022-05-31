/* eslint-disable object-property-newline */
import React, { Suspense } from "react";
import { Redirect, Switch } from "react-router-dom";
import { useSelector } from "react-redux";

import { authSelectors } from "@features/auth";
import { ProtectedRoute } from "./ProtectedRoute";
import { protectedRoutes, authRoutes } from "./routes";

export const AppRoutes = (): JSX.Element => {
  const isAuth = useSelector(authSelectors.getIsAuth());

  return (
    <Suspense fallback={<div>loading</div>}>
      <Switch>
        {protectedRoutes.map((route) => (
          <ProtectedRoute
            key={route.path}
            {...route}
            redirectPath="/login"
            isAuth={isAuth}
          />
        ))}
        {authRoutes.map((route) => (
          <ProtectedRoute
            key={route.path}
            {...route}
            redirectPath="/products"
            isAuth={!isAuth}
          />
        ))}
        <Redirect to={isAuth ? "/products" : "/login"} />
      </Switch>
    </Suspense>
  );
};
