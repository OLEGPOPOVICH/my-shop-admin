import React from "react";
import { ReactSVG } from "react-svg";
import loaderSvg from "./loader.svg";
import styled from "styled-components";

type LoaderType = {
  height?: string;
};

const WrapperLoader = styled.div<LoaderType>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  max-height: ${(props) => `${props.height || "100"}px`};

  & div,
  svg {
    height: ${(props) => `${props.height || "100"}px`};
    display: inline-block;
  }
`;

export const Loader = (props: LoaderType): JSX.Element => (
  <WrapperLoader {...props}>
    <ReactSVG src={loaderSvg} />
  </WrapperLoader>
);
