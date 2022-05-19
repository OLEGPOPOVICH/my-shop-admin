import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "./components/UI";
import { Header } from "@src/components/Header";
import { Sidebar } from "@src/components/Sidebar";
import { AppRoutes } from "./AppRoutes";
import {
  checkAuthActionThunk,
  logoutActionThunk,
  authUserSelectors,
  isAuthSelectors,
} from "./features/auth";
import { loadersSelectors, LoaderWrap } from "./features/loaders";
import {
  useSocketIOClientActions,
  useSocketIOClientState,
} from "./SocketIOClientProvider";

if (process.env.NODE_ENV === "development") {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { worker } = require("@mocks");
  worker.start();
}

export const App = () => {
  const dispatch = useDispatch();
  const loaders = useSelector(loadersSelectors());
  const isAuth = useSelector(isAuthSelectors());
  const authUser = useSelector(authUserSelectors());
  const { socket } = useSocketIOClientState();
  const socketActions = useSocketIOClientActions();

  useEffect(() => {
    dispatch(checkAuthActionThunk());
  }, []);

  const handleLogout = () => {
    if (socket && authUser?.id) {
      socketActions.emit.disconnectUser(authUser.id);
    }

    dispatch(logoutActionThunk());
  };

  return (
    <>
      <Sidebar />
      <div className="body">
        <LoaderWrap loader={loaders.checkAuth}>
          <Header>
            <div></div>
            {isAuth ? (
              <Button className="secondary" onClick={handleLogout}>
                Выйти
              </Button>
            ) : null}
          </Header>
          <div className="wrapper-page container">
            <div className="page">
              <AppRoutes />
            </div>
          </div>
          <footer className="footer">
            <div className="container">Footer</div>
          </footer>
        </LoaderWrap>
      </div>
    </>
  );
};
