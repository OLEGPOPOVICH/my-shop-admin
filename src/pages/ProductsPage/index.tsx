import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { Button, IconButton, ModalConfirm } from "@src/components/UI";
import {
  setProductsForEdit,
  deleteProductThunkCreator,
  getProductsByIdsThunkCreator,
  saveProductsThunkCreator,
  ProductType,
  ViewType,
} from "@src/features/products";
import { ProductsViewGrid } from "./ProductsViewGrid";
import { ProductsEdit } from "./ProductsEdit";

export const ProductsPage = (): JSX.Element => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [viewType, setViewType] = useState<ViewType>(ViewType.grid);
  const [isSettingsViewProduct, setIsSettingsViewProduct] =
    useState<boolean>(false);
  const [isModalConfirm, setIsModalConfirm] = useState(false);
  const [productIds, setProductIds] = useState<string[]>([]);
  const [isEdit, setIsEdit] = useState(false);

  const handleDeleteProduct = (isConfirm: boolean) => {
    if (isConfirm) {
      dispatch(deleteProductThunkCreator({ ids: `${productIds}` }));
    }

    setIsModalConfirm(false);
    setProductIds([]);
  };

  const handleSelectProduct = (isSelected: boolean, id: string) => {
    if (!isSelected) {
      setProductIds([...productIds, id]);
    } else {
      setProductIds(productIds.filter((productId) => productId !== id));
    }
  };

  const showModalConfirm = () => {
    setIsModalConfirm(true);
  };

  const handleEditProduct = () => {
    if (productIds.length) {
      dispatch(getProductsByIdsThunkCreator({ ids: `${productIds}` }));
    }

    setIsEdit(true);
  };

  const handleSaveProducts = (products: ProductType[]) => {
    dispatch(saveProductsThunkCreator(products, { ids: `${productIds}` }));
    setIsEdit(false);
    setProductIds([]);
    dispatch(
      setProductsForEdit({
        products: [],
        total: 0,
      })
    );
  };

  const handleCancelPodalEditProducts = () => {
    setIsEdit(false);
    setProductIds([]);
    dispatch(
      setProductsForEdit({
        products: [],
        total: 0,
      })
    );
  };

  const handleAddProduct = () => {
    history.push("/product/add");
  };

  return (
    <>
      <ToolBar>
        <Actions>
          <Button
            type="button"
            className="button primary"
            onClick={handleAddProduct}
          >
            Добавить
          </Button>
          <Button
            type="button"
            className="button secondary"
            disabled={!productIds.length}
            onClick={handleEditProduct}
          >
            Редактировать
          </Button>
          <Button
            type="button"
            className="button danger"
            disabled={!productIds.length}
            onClick={showModalConfirm}
          >
            Удалить
          </Button>
        </Actions>
        <ViewActions>
          <IconButton
            className="btn__icon-white"
            type="button"
            onClick={() => setIsSettingsViewProduct(!isSettingsViewProduct)}
          >
            settings
          </IconButton>
          <IconButton
            type="button"
            className={`${viewType === ViewType.grid ? "active" : ""}`}
            onClick={() => setViewType(ViewType.grid)}
          >
            grid_view
          </IconButton>
        </ViewActions>
      </ToolBar>

      <ProductsViewGrid
        isSettingsViewProduct={isSettingsViewProduct}
        selectProduct={handleSelectProduct}
        productIds={productIds}
      />

      <ProductsEdit
        isEdit={isEdit}
        onCancel={handleCancelPodalEditProducts}
        onSave={handleSaveProducts}
      />

      <ModalConfirm
        showModal={isModalConfirm}
        title="Удаление"
        onClick={handleDeleteProduct}
      />
    </>
  );
};

const ToolBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Actions = styled.div`
  > button:nth-child(n + 2) {
    margin-left: 15px;
  }
`;

const ViewActions = styled.div`
  > button:nth-child(n + 2) {
    margin-left: 15px;
  }
`;
