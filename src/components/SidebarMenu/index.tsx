import React from "react";
import { Link } from "react-router-dom";

import {
  Person,
  ShoppingBasket,
  Extension,
  BarChart,
} from "@components/UI/icons";

import "./sidebarMenu";

export const SidebarMenu = () => (
  <ul className="menu">
    <li className="menu__item">
      <Link to="/users">
        <Person />
        <span>Пользователи</span>
      </Link>
    </li>
    <li className="menu__item">
      <Link to="/orders">
        <ShoppingBasket />
        <span>Заказы</span>
      </Link>
    </li>
    <li className="menu__item">
      <Link to="/products">
        <Extension />
        <span>Продукты</span>
      </Link>
    </li>
    <li className="menu__item">
      <Link to="/analytics">
        <BarChart />
        <span>Аналитика</span>
      </Link>
    </li>
  </ul>
);
