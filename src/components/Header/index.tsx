import * as React from "react";
import "./header";

type HeaderTypes = {
  children: React.ReactNode;
};

export const Header: React.FC<HeaderTypes> = ({ children }) => (
  <header className="header">
    <div className="header__wrapper container">{children}</div>
  </header>
);
