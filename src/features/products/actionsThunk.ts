/* eslint-disable no-console */
import { Dispatch } from "react";

import { productsAPI } from "@api";
import { ParamsListType } from "@src/database";
import { LoaderActionType, removeLoader, setLoader } from "@features/loaders";
import {
  ProductActionType,
  setProducts,
  setProductsForEdit,
  deleteProducts,
  setProductsError,
  setSettingsFields,
  setSettingsFieldsError,
  saveProducts,
  addProduct,
} from "./actions";
import { ProductType, SettingsFieldType } from "./types";

export const getProductsThunkCreator =
  (params: Omit<ParamsListType, "ids"> = {}) =>
  async (dispatch: Dispatch<ProductActionType | LoaderActionType>) => {
    dispatch(setLoader("products"));

    try {
      const { data, total } = await productsAPI.getProducts<ProductType>({
        params,
      });

      dispatch(
        setProducts({
          products: data,
          total,
        })
      );
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : error;
      dispatch(setProductsError(errorMsg as string));
    }

    dispatch(removeLoader("products"));
  };

export const addProductThunkCreator =
  (data: ProductType) =>
  async (dispatch: Dispatch<ProductActionType | LoaderActionType>) => {
    try {
      await productsAPI.addProduct(data);

      dispatch(addProduct(data));
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : error;
      console.log(errorMsg);
    }
  };

export const saveProductsThunkCreator =
  (data: ProductType[], params: Pick<ParamsListType, "ids">) =>
  async (dispatch: Dispatch<ProductActionType | LoaderActionType>) => {
    try {
      await productsAPI.saveProducts(data, { params });

      if (params.ids) {
        dispatch(
          saveProducts({
            ids: params.ids.split(","),
            products: data,
          })
        );
      }
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : error;
      console.error(errorMsg);
    }
  };

export const getProductsByIdsThunkCreator =
  (params: Pick<ParamsListType, "ids">) =>
  async (dispatch: Dispatch<ProductActionType | LoaderActionType>) => {
    dispatch(setLoader("productsEdit"));

    try {
      const { data, total } = await productsAPI.getProducts<ProductType>({
        params,
      });

      dispatch(
        setProductsForEdit({
          products: data,
          total,
        })
      );
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : error;
      dispatch(setProductsError(errorMsg as string));
    }

    dispatch(removeLoader("products"));
  };

export const deleteProductThunkCreator =
  (params: Pick<ParamsListType, "ids">) =>
  async (dispatch: Dispatch<ProductActionType | LoaderActionType>) => {
    try {
      await productsAPI.deleteProducts({ params });

      if (params.ids) {
        dispatch(deleteProducts(params.ids.split(",")));
      }
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : error;
      dispatch(setProductsError(errorMsg as string));
    }
  };

export const getSettingsFieldsThunkCreator =
  () => async (dispatch: Dispatch<ProductActionType | LoaderActionType>) => {
    dispatch(setLoader("settingsFields"));

    try {
      const { data } = await productsAPI.getSettingsFields<SettingsFieldType>();
      dispatch(setSettingsFields(data));
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : error;
      dispatch(setSettingsFieldsError(errorMsg as string));
    }

    dispatch(removeLoader("settingsFields"));
  };
