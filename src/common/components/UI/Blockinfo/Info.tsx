import React, { ReactNode } from "react";
import "./Blockinfo";

type InfoType = {
  title?: string;
  subtitle?: string;
  children?: ReactNode;
};

export const Info = ({ title, subtitle, children }: InfoType): JSX.Element => (
  <div className="blockinfo__info">
    {children || (
      <>
        {title && <div className="blockinfo__title">{title}</div>}
        {subtitle && <div className="blockinfo__subtitle">{subtitle}</div>}
      </>
    )}
  </div>
);
