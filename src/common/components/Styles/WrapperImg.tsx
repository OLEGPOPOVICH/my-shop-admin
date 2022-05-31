import styled from "styled-components";

type WrapperImgType = {
  maxHeight?: string;
  maxWidth?: string;
};

export const WrapperImg = styled.div<WrapperImgType>`
  display: flex;
  align-items: center;
  justify-content: center;

  & img {
    max-height: ${({ maxHeight }) => maxHeight || "100%"};
    max-width: ${({ maxWidth }) => maxWidth || "100%"};
  }
`;
