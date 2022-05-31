import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ProductControl, ProductType } from "@features/products";
import { productsProcesses } from "@processes/products";
import { Button } from "@common/components/UI";

const ProductAddPage = (): JSX.Element => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState<ProductType>({} as ProductType);

  const handleProductChange = (product: ProductType) => {
    setProduct(product);
  };

  const handleAddProduct = () => {
    dispatch(productsProcesses.addProduct(product));
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

export default ProductAddPage;
