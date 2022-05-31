import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppRoutes } from "./routes/AppRoutes";
import { Button } from "@common/components/UI";
import { Header } from "@common/components/Header";
import { Sidebar } from "@common/components/Sidebar";

import { authSelectors } from "@features/auth";
import { authProcesses } from "@processes/auth";
import {
  globalErrorSelectors,
  GlobalErrorLayout,
  GlobalModalError,
} from "@features/globalError";
import { loadersSelectors, Loader } from "@features/loaders";
import { useChatState, useChatActions } from "@common/context/chat";

if (process.env.NODE_ENV === "development") {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { worker } = require("@mocks");
  worker.start();
}

export const App = () => {
  const dispatch = useDispatch();
  const loaders = useSelector(loadersSelectors.getLoaders());
  const isAuth = useSelector(authSelectors.getIsAuth());
  const isGlobalError = useSelector(globalErrorSelectors.getIsGlobalError());
  const isGlobalModalErrors = useSelector(
    globalErrorSelectors.getIsGlobalModalErrors()
  );
  const authUser = useSelector(authSelectors.getUser());
  const { socket } = useChatState();
  const socketActions = useChatActions();

  useEffect(() => {
    dispatch(authProcesses.checkAuth());
  }, []);

  const handleLogout = () => {
    if (socket && authUser?.id) {
      socketActions.emit.disconnectUser(authUser.id);
    }

    dispatch(authProcesses.logout());
  };

  return (
    <>
      <Sidebar />
      <div className="body">
        <Loader loader={loaders.checkAuth}>
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
              {isGlobalError ? <GlobalErrorLayout /> : <AppRoutes />}
            </div>
          </div>
          <footer className="footer">
            <div className="container">Footer</div>
          </footer>
        </Loader>
      </div>
      {isGlobalModalErrors ? <GlobalModalError /> : null}
    </>
  );
};
