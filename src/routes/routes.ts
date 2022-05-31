/* eslint-disable object-property-newline */
import React from "react";

const AnaliticsPage = React.lazy(() => import("@pages/AnaliticsPage"));
const OrdersPage = React.lazy(() => import("@pages/OrdersPage"));
const ProductsPage = React.lazy(() => import("@pages/ProductsPage"));
const ProductAddPage = React.lazy(() => import("@pages/ProductAddPage"));
const UsersPage = React.lazy(() => import("@pages/UsersPage"));
const ChatPage = React.lazy(() => import("@pages/ChatPage"));

const LoginPage = React.lazy(() => import("@pages/LoginPage"));
const RegisterPage = React.lazy(() => import("@pages/RegisterPage"));

export const protectedRoutes = [
  { path: "/users", exact: true, component: UsersPage },
  { path: "/orders", exact: true, component: OrdersPage },
  { path: "/products", exact: true, component: ProductsPage },
  { path: "/product/add", exact: true, component: ProductAddPage },
  { path: "/analytics", exact: true, component: AnaliticsPage },
  { path: "/chat", exact: true, component: ChatPage },
];

export const authRoutes = [
  { path: "/login", exact: true, component: LoginPage },
  { path: "/register", exact: true, component: RegisterPage },
];
