import React from "react";
import { NavLink } from "react-router-dom";

import {
  Person,
  ShoppingBasket,
  Extension,
  BarChart,
} from "@components/UI/icons";

import "./SidebarMenu";

export const SidebarMenu = () => (
  <ul className="menu">
    <li className="menu__item">
      <NavLink to="/users" activeClassName="active">
        <Person />
        <span>Пользователи</span>
      </NavLink>
    </li>
    <li className="menu__item">
      <NavLink to="/orders" activeClassName="active">
        <ShoppingBasket />
        <span>Заказы</span>
      </NavLink>
    </li>
    <li className="menu__item">
      <NavLink to="/products" activeClassName="active">
        <Extension />
        <span>Продукты</span>
      </NavLink>
    </li>
    <li className="menu__item">
      <NavLink to="/analytics" activeClassName="active">
        <BarChart />
        <span>Аналитика</span>
      </NavLink>
    </li>
  </ul>
);
