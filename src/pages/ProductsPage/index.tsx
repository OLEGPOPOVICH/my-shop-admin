import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { Button, IconButton, ModalConfirm } from "@common/components/UI";
import { productsActions, ProductType, ViewType } from "@features/products";
import { productsProcesses } from "@processes/products";
import { ProductsViewGrid } from "./ProductsViewGrid";
import { ProductsEdit } from "./ProductsEdit";

const ProductsPage = (): JSX.Element => {
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
      dispatch(productsProcesses.deleteProducts({ ids: `${productIds}` }));
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
      dispatch(productsProcesses.getProductsByIds({ ids: `${productIds}` }));
    }

    setIsEdit(true);
  };

  const handleSaveProducts = (products: ProductType[]) => {
    dispatch(
      productsProcesses.saveProducts(products, { ids: `${productIds}` })
    );
    setIsEdit(false);
    setProductIds([]);
  };

  const handleCancelPodalEditProducts = () => {
    setIsEdit(false);
    setProductIds([]);
    dispatch(
      productsActions.setProductsForEdit({
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
            ????????????????
          </Button>
          <Button
            type="button"
            className="button secondary"
            disabled={!productIds.length}
            onClick={handleEditProduct}
          >
            ??????????????????????????
          </Button>
          <Button
            type="button"
            className="button danger"
            disabled={!productIds.length}
            onClick={showModalConfirm}
          >
            ??????????????
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
        title="????????????????"
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

export default ProductsPage;
