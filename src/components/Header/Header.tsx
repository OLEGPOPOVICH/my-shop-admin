import * as React from "react";
import styles from "./header.module.scss";

type HeaderTypes = {
  children: React.ReactNode;
};

export const Header: React.FC<HeaderTypes> = ({ children }) => (
  <header className={styles.header}>
    <div className={`${styles.headerWrapper} container`}>{children}</div>
  </header>
);
