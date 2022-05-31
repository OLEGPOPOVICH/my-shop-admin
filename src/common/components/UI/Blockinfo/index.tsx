/* eslint-disable require-jsdoc */
import React, { ReactNode } from "react";
import classNames from "classnames";
import { Img } from "./Img";
import { Info } from "./Info";
import { Inforight } from "./Inforight";

export enum BlockinfoSize {
  small = "small",
}

type BlockinfoType = {
  children: ReactNode[];
  size?: keyof typeof BlockinfoSize;
  revert?: boolean;
};

function Blockinfo({ size, revert, children }: BlockinfoType) {
  const classBlockinfo = classNames("blockinfo", {
    "blockinfo-revert": revert,
  });

  return (
    <div className={`${classBlockinfo} blockinfo-${size || "small"}`}>
      {children}
    </div>
  );
}

Blockinfo.Img = Img;
Blockinfo.Info = Info;
Blockinfo.Inforight = Inforight;

export { Blockinfo };
