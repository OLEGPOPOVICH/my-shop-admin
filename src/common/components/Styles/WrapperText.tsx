import styled from "styled-components";

type WrapperTextType = {
  height?: string;
  fontSize?: string;
};

export const WrapperText = styled.div<WrapperTextType>`
  height: ${({ height }) => height || "100%"};
  font-size: ${({ fontSize }) => fontSize || "12px"};
  white-space: break-spaces;
  overflow-y: auto;
  overflow-x: hidden;
`;
