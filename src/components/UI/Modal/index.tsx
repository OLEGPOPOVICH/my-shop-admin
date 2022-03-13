/* eslint-disable require-jsdoc */
import React, { ReactNode, useEffect } from "react";
import { Portal } from "../Portal";
import { Body } from "./Body";
import { Footer } from "./Footer";
import { Header } from "./Header";
import "./Modal";

type OptionsType = {
  width: string;
};

export type ModalType = {
  showModal: boolean;
  options?: OptionsType;
  children: ReactNode[];
};

function Modal({ showModal, options, children }: ModalType) {
  const listItemStyle = {
    maxWidth: options && options.width ? options.width : "400px",
  };

  useEffect(() => {
    const body = document.getElementsByTagName("body");

    if (showModal) {
      body[0]?.classList.add("no-scroll");
    } else {
      body[0]?.classList.remove("no-scroll");
    }
  }, [showModal]);

  if (!showModal) {
    return null;
  }

  return (
    <Portal>
      <div className="modal modal-overlay">
        <div className="modal__container" style={listItemStyle}>
          {children}
        </div>
      </div>
    </Portal>
  );
}

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

export { Modal };
