/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "@store";
import { HashRouter } from "react-router-dom";
import { App } from "./App";

import "./styles/scss.scss";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("app")
);
