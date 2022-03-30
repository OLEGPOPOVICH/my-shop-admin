import React, { ButtonHTMLAttributes } from "react";
import { Icon, SxProps } from "../Icon";
import "./IconButton";

type IconButtonType = ButtonHTMLAttributes<HTMLButtonElement> & {
  sx?: SxProps;
};

export const IconButton = ({
  className = "",
  sx,
  ...props
}: IconButtonType): JSX.Element => (
  <button className={`btn__icon ${className}`} {...props}>
    <Icon sx={sx}>{props.children}</Icon>
  </button>
);
