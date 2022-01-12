import React from "react";
import { ReactSVG } from "react-svg";
import loaderSvg from "./loader.svg";
import styles from "./loader.module.scss";

export const Loader = () => (
  <ReactSVG src={loaderSvg} className={styles.wrapperLoader} />
);
