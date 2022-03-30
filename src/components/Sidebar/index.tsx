import React from "react";
import { Link } from "react-router-dom";

import { SidebarMenu } from "@src/components/SidebarMenu";
import { HeadsetMic } from "@components/UI";

import "./sidebar";

export const Sidebar = () => (
  <div className="sidebar">
    <div className="sidebar__header">
      <div className="logo">MyAdminShop</div>
    </div>
    <div className="sidebar__body">
      <SidebarMenu />
    </div>
    <div className="sidebar__footer">
      <div className="menu__item">
        <Link to="/chat">
          <HeadsetMic />
          <span>Чат</span>
        </Link>
      </div>
    </div>
  </div>
);
