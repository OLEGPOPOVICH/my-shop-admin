/* eslint-disable max-len */
import React, { ReactNode } from "react";
import "./Tag";

type TagType = {
  style?: any;
  className?: string;
  icon?: ReactNode;
  onClick?: () => void;
  children?: ReactNode;
};

export const Tag = ({
  style,
  className = "",
  icon,
  onClick,
  children,
}: TagType) => (
  <span className={`tag ${className}`} style={style} onClick={onClick}>
    {icon ? <span className="tag__icon">{icon}</span> : null}
    <span className="tag__text">{children}</span>
  </span>
);
