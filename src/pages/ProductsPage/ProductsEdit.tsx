import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Button, Modal } from "@common/components/UI";
import {
  ProductControl,
  productsSelectors,
  ProductType,
} from "@features/products";

type ProductsEditType = {
  isEdit: boolean;
  onSave: (products: ProductType[]) => void;
  onCancel: () => void;
};

export const ProductsEdit = ({
  isEdit,
  onSave,
  onCancel,
}: ProductsEditType) => {
  const productsData = useSelector(productsSelectors.getProductsDataForEdit());
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    setProducts([...productsData.products]);
  }, [productsData]);

  const handleProductChange = (productEdit: ProductType) => {
    setProducts(
      products.map((product) => {
        if (product.id === productEdit.id) {
          return productEdit;
        }

        return product;
      })
    );
  };

  const handleSaveClick = () => {
    onSave(products);
  };

  return (
    <Modal showModal={isEdit} options={{ width: "800px" }}>
      <Modal.Header title="Редактирование" />
      <Modal.Body>
        <WrapProducts>
          {products.map((product) => (
            <ProductControl
              key={product.id}
              product={product}
              onChange={handleProductChange}
            />
          ))}
        </WrapProducts>
      </Modal.Body>
      <Modal.Footer>
        <Button type="button" className="button secondary" onClick={onCancel}>
          Отмена
        </Button>
        <Button
          type="button"
          className="button primary"
          onClick={handleSaveClick}
        >
          Сохранить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const WrapProducts = styled.div`
  & > div:first-child {
    margin-top: 10px;
  }
  & > div:nth-child(n + 2) {
    margin-top: 25px;
  }
  & > div:last-child {
    margin-bottom: 10px;
  }
`;
