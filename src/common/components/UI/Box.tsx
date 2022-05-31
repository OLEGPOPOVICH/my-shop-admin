import React, { FC, ReactNode, ElementType } from "react";
import { Box as BoxM, SxProps } from "@mui/material";

type BoxType = {
  component?: ElementType;
  children: ReactNode;
  sx?: SxProps;
};

export const Box: FC<BoxType> = ({ component, children, sx }): JSX.Element => (
  <BoxM component={component} sx={sx}>
    {children}
  </BoxM>
);
