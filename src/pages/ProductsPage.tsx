import React from "react";
import { Product } from "@features/products";
import { meatProducts } from "@src/data";

export const ProductsPage = (): JSX.Element => (
  <>
    <div>Page Products </div>
    {meatProducts.map((product) => (
      <Product key={product.id} {...product} />
    ))}
  </>
);
