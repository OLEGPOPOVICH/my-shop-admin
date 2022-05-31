import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Avatar, HeadsetMic } from "@common/components/UI";
import { SidebarMenu } from "@common/components/SidebarMenu";
import { authSelectors } from "@features/auth";

import "./Sidebar";

export const Sidebar = () => {
  const authUser = useSelector(authSelectors.getUser());
  const isAuth = useSelector(authSelectors.getIsAuth());

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="logo">MyAdminShop</div>
      </div>
      {isAuth ? (
        <div className="profile profile__vertical">
          <div className="profile__avatar">
            <Avatar
              fullname={authUser?.fullName || null}
              avatar={authUser?.avatar || "../images/avatar.png"}
            />
          </div>
          <div className="profile__info">
            <div className="profile_title">{authUser?.fullName}</div>
          </div>
        </div>
      ) : null}
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
};
