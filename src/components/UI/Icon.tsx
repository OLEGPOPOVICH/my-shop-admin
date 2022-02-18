import React, { FC, ReactNode } from "react";
import { Icon as IconM, SxProps } from "@mui/material";
export { SxProps } from "@mui/material";

export enum ColorIcon {
  inherit = "inherit",
  action = "action",
  disabled = "disabled",
  primary = "primary",
  secondary = "secondary",
  error = "error",
  info = "info",
  success = "success",
  warning = "warning",
}

type IconType = {
  color?: ColorIcon;
  sx?: SxProps;
  children?: ReactNode;
};

export const Icon: FC<IconType> = ({ color, sx, children }): JSX.Element => (
  <IconM color={color} sx={sx}>
    {children}
  </IconM>
);
