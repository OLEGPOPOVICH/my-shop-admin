import React, { ReactNode } from "react";
import "./Blockinfo";

type InforightType = {
  info?: string;
  children?: ReactNode;
};

export const Inforight = ({ info, children }: InforightType): JSX.Element => (
  <div className="blockinfo__inforight">
    {info ? <span>{info}</span> : null}
    {children}
  </div>
);
