import * as React from "react";
import styled from "styled-components";

type DiscountPriceType = {
  price?: number | null;
  discountPrice?: number | null;
};

const StyledPrice = styled.span`
  text-decoration: line-through;
  text-decoration-color: #f50057;
  font-size: 18px;
`;
const StyledDiscountPrice = styled.span`
  color: #f50057;
  font-size: 18px;
`;

export const DiscountPrice = ({
  price,
  discountPrice,
}: DiscountPriceType): JSX.Element => (
  <>
    {price && !discountPrice ? <StyledPrice>{price}</StyledPrice> : null}
    {discountPrice && !price ? (
      <StyledDiscountPrice>{discountPrice}</StyledDiscountPrice>
    ) : null}
  </>
);
