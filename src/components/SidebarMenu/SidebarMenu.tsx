import React from "react";
import {
  BarChart,
  Extension,
  Person,
  ShoppingBasket,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import styles from "./sidebarMenu.module.scss";

export const SidebarMenu = () => (
  <ul className={styles.menu}>
    <li className={styles.menuItem}>
      <Link to="/users">
        <Person />
        <span>Пользователи</span>
      </Link>
    </li>
    <li className={styles.menuItem}>
      <Link to="/orders">
        <ShoppingBasket />
        <span>Заказы</span>
      </Link>
    </li>
    <li className={styles.menuItem}>
      <Link to="/products">
        <Extension />
        <span>Проукты</span>
      </Link>
    </li>
    <li className={styles.menuItem}>
      <Link to="/analytics">
        <BarChart />
        <span>Аналитика</span>
      </Link>
    </li>
  </ul>
);
