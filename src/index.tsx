/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "@store";
import { HashRouter } from "react-router-dom";
import { ChatProvider } from "@common/context/chat";
import { App } from "./App";

import "@common/styles/scss.scss";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <ChatProvider>
          <App />
        </ChatProvider>
      </HashRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("app")
);
