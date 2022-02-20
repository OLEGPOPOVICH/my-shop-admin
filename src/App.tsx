import React from "react";
import { Header } from "@src/components/Header";
import { Sidebar } from "@src/components/Sidebar";
import { AppRoutes } from "./AppRoutes";

if (process.env.NODE_ENV === "development") {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { worker } = require("@mocks");
  worker.start();
}

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
