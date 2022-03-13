import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  ProductControl,
  ProductType,
  addProductThunkCreator,
} from "@src/features/products";
import { Button } from "@src/components/UI";

export const ProductAddPage = (): JSX.Element => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState<ProductType>({} as ProductType);

  const handleProductChange = (product: ProductType) => {
    setProduct(product);
  };

  const handleAddProduct = () => {
    dispatch(addProductThunkCreator(product));
    setProduct({} as ProductType);
  };

  return (
    <>
      <h1 className="margin-bottom-32">Новый продукт</h1>
      <ProductControl product={product} onChange={handleProductChange} />
      <div className="margin-top-32">
        <Button
          type="button"
          className="button primary"
          onClick={handleAddProduct}
        >
          Добавить
        </Button>
      </div>
    </>
  );
};
