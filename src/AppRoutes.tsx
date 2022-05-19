/* eslint-disable object-property-newline */
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import { AnaliticsPage } from "@pages/AnaliticsPage";
import { OrdersPage } from "@pages/OrdersPage";
import { ProductsPage } from "@pages/ProductsPage";
import { ProductAddPage } from "@pages/ProductAddPage";
import { UsersPage } from "@pages/UsersPage";
import { ChatPage } from "@pages/ChatPage";
import { AuthPage } from "@pages/AuthPage";
import { isAuthSelectors } from "./features/auth";

const registerRoutes = [
  { path: "/users", exact: true, component: UsersPage },
  { path: "/orders", exact: true, component: OrdersPage },
  { path: "/products", exact: true, component: ProductsPage },
  { path: "/product/add", exact: true, component: ProductAddPage },
  { path: "/analytics", exact: true, component: AnaliticsPage },
  { path: "/chat", exact: true, component: ChatPage },
];

export const AppRoutes = (): JSX.Element => {
  const isAuth = useSelector(isAuthSelectors());

  return (
    <Switch>
      {isAuth ? (
        registerRoutes.map((route) => {
          const Component = route.component;

          return (
            <Route key={route.path} exact path={route.path}>
              <Component />
            </Route>
          );
        })
      ) : (
        <Route exact path="/auth">
          <AuthPage />
        </Route>
      )}
      <Redirect to={isAuth ? "/products" : "/auth"} />
    </Switch>
  );
};
