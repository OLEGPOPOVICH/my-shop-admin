import * as React from "react";
import styled from "styled-components";

type GridType = {
  data: JSX.Element[];
};

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
  width: 100%;
  max-width: 1490px;
  margin: 0 auto;

  @media (max-width: 1670px) {
    grid-template-columns: repeat(3, 1fr);
    max-width: 1100px;
  }

  @media (max-width: 1320px) {
    grid-template-columns: repeat(2, 1fr);
    max-width: 730px;
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(1, 1fr);
    max-width: 350px;
  }
`;

const StyledGridItem = styled.div``;

export const Grid = ({ data }: GridType): JSX.Element => (
  <StyledGrid>
    {data.map((dataItem: JSX.Element) => (
      <StyledGridItem key={dataItem.key}>{dataItem}</StyledGridItem>
    ))}
  </StyledGrid>
);
