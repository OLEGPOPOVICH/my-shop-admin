import { Dispatch } from "react";

import { productsAPI, ProductsAPIGet } from "@src/api/products";
import { LoaderActionType, removeLoader, setLoader } from "@features/loaders";
import {
  ProductActionType,
  setProducts,
  setProductsError,
  setSettingsFields,
  setSettingsFieldsError,
} from "./actions";

export const getProductsThunkCreator =
  (params: ProductsAPIGet = {}) =>
  async (dispatch: Dispatch<ProductActionType | LoaderActionType>) => {
    dispatch(setLoader("products"));

    try {
      const response = await productsAPI.getProducts(params);
      dispatch(
        setProducts({
          products: response.data,
          total: response.total,
        })
      );
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : error;
      dispatch(setProductsError(errorMsg as string));
    }

    dispatch(removeLoader("products"));
  };

export const getSettingsFieldsThunkCreator =
  () => async (dispatch: Dispatch<ProductActionType | LoaderActionType>) => {
    dispatch(setLoader("settingsFields"));

    try {
      const response = await productsAPI.getSettingsFields();
      dispatch(setSettingsFields(response.data));
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : error;
      dispatch(setSettingsFieldsError(errorMsg as string));
    }

    dispatch(removeLoader("settingsFields"));
  };
