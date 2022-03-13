import React from "react";
import { Route, Switch } from "react-router-dom";
import { AnaliticsPage } from "@pages/AnaliticsPage";
import { OrdersPage } from "@pages/OrdersPage";
import { ProductsPage } from "@pages/ProductsPage";
import { ProductAddPage } from "@pages/ProductAddPage";
import { UsersPage } from "@pages/UsersPage";
import { ChatPage } from "@pages/ChatPage";

export const AppRoutes = (): JSX.Element => (
  <Switch>
    <Route exact path="/users">
      <UsersPage />
    </Route>
    <Route exact path="/orders">
      <OrdersPage />
    </Route>
    <Route exact path="/products">
      <ProductsPage />
    </Route>
    <Route exact path="/product/add">
      <ProductAddPage />
    </Route>
    <Route exact path="/analytics">
      <AnaliticsPage />
    </Route>
    <Route exact path="/chat">
      <ChatPage />
    </Route>
  </Switch>
);
