import React from "react";
import { ReactSVG } from "react-svg";
import errorSvg from "./error.svg";
import styled from "styled-components";

export type LoaderErrorType = null | string;

type LoaderType = {
  error?: LoaderErrorType;
  isIcon?: boolean;
  height?: string;
};

const WrapperLoader = styled.div<LoaderType>`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 6px;
  box-shadow: 2px 6px 17px 0px rgba(0, 0, 0, 0.18);

  & > div {
    margin-bottom: 10px;
  }

  & div,
  svg {
    height: ${(props) => `${props.height || "100"}px`};
    display: inline-block;
  }

  & > p {
    font-size: 18px;
  }
`;

export const LoaderError = ({
  error,
  isIcon = true,
  height,
}: LoaderType): JSX.Element => (
  <WrapperLoader height={height}>
    {isIcon ? <ReactSVG src={errorSvg} /> : null}
    {error ? <p>{error}</p> : null}
  </WrapperLoader>
);
