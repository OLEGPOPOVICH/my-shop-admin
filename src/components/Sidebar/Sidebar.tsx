import React from "react";
import { HeadsetMic } from "@material-ui/icons";
import { Link } from "react-router-dom";
import styles from "./sidebar.module.scss";
import { SidebarMenu } from "@components/SidebarMenu/SidebarMenu";

export const Sidebar = () => (
  <div className={styles.sidebar}>
    <div className={styles.sidebarHeader}>
      <div className="logo">MyAdminShop</div>
    </div>
    <div className={styles.sidebarBody}>
      <SidebarMenu />
    </div>
    <div className={styles.sidebarFooter}>
      <div className="MenuItem">
        <Link to="/chat">
          <HeadsetMic />
          <span>Чат</span>
        </Link>
      </div>
    </div>
  </div>
);
