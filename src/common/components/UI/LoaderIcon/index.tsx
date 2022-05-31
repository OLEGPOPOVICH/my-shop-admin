import React from "react";
import { ReactSVG } from "react-svg";
import styled from "styled-components";
import loaderSvg from "@src/assets/img/loader.svg";

type LoaderIconType = {
  height?: number;
};

const WrapperLoaderIcon = styled.div<LoaderIconType>`
  & div,
  svg {
    height: ${(props) => `${props.height || "100"}px`};
    display: inline-block;
  }
`;

export const LoaderIcon = ({ height }: LoaderIconType) => (
  <WrapperLoaderIcon height={height} className="loader__icon">
    <ReactSVG src={loaderSvg} />
  </WrapperLoaderIcon>
);
