import React from "react";
import { ReactSVG } from "react-svg";
import { SvgIconProps } from "@mui/material/SvgIcon";
import { SvgIcon as SvgIconM } from "@mui/material";

type SvgIconType = {
  props: SvgIconProps;
  srcSvg: string;
  className?: string;
};

export const SvgIcon = ({
  props,
  srcSvg,
  className,
}: SvgIconType): JSX.Element => (
  <SvgIconM {...props}>
    <ReactSVG src={srcSvg} className={className} />
  </SvgIconM>
);
