/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
// Import styles from "./product.module.scss";

type ProductType = {
  title: string;
  desc: string;
  category: string;
  price: number;
  basePrice: number;
  isSale: boolean;
  imgUrl: string;
};

export const Product = ({ title }: ProductType): JSX.Element => (
  <div>{title}</div>
);
