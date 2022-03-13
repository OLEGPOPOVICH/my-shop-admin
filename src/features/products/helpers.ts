import { ProductType } from "./types";

export const getProductIds = (products: ProductType[]): string[] =>
  products.map((product: ProductType) => product.id);
