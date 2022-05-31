import React from "react";
import { ReactSVG } from "react-svg";
import styled from "styled-components";
import errorSvg from "@src/assets/img/error.svg";

type ErrorIconType = {
  height?: number;
};

const WrapperErrorIcon = styled.div<ErrorIconType>`
  & div,
  svg {
    height: ${(props) => `${props.height || "100"}px`};
    display: inline-block;
  }
`;

export const ErrorIcon = ({ height }: ErrorIconType) => (
  <WrapperErrorIcon height={height} className="error__icon">
    <ReactSVG src={errorSvg} />
  </WrapperErrorIcon>
);
