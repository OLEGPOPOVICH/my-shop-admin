/* eslint-disable no-console */
import { Dispatch } from "react";

import { productsAPI } from "@api";
import { ParamsListType } from "@database";
import { LoaderActionType, removeLoader, setLoader } from "@features/loaders";
import {
  ProductActionType,
  setProducts,
  setProductsError,
  setSettingsFields,
  setSettingsFieldsError,
} from "./actions";
import { ProductType, SettingsFieldType } from "./ducks";

export const getProductsThunkCreator =
  (params: ParamsListType = {}) =>
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
