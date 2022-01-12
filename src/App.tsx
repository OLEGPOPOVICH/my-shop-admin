import React from "react";
import { Header } from "@components/Header/Header";
import { Sidebar } from "@components/Sidebar/Sidebar";
import { AppRoutes } from "./routes";

export const App = () => (
  <>
    <Sidebar />
    <div className="body">
      <Header>
        <div></div>
        <div className="profile">
          <div className="profile-img"></div>
          <div className="profile-info">
            <div className="profile-title">Админ А. А.</div>
            <button>Выйти</button>
          </div>
        </div>
      </Header>
      <div className="wrapper-page container">
        <div className="page">
          <AppRoutes />
        </div>
      </div>
      <footer className="footer">
        <div className="container">Footer</div>
      </footer>
    </div>
  </>
);
