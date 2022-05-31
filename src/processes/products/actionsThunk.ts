/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch } from "react";
import { productsAPI } from "@api";
import { ParamsListType } from "@database";
import { loadersActions, LoaderActionType } from "@features/loaders";
import {
  productsActions,
  ProductActionType,
  ProductType,
  SettingsFieldType,
} from "@features/products";
import { errorProcesses, HandleHTTPErrorProcesseType } from "@processes/error";

/**
 * ## Процесс получения списка продуктов
 *
 * @param {object} params - Параметры запроса
 *
 * @returns {void}
 */
const getProducts =
  (params: Omit<ParamsListType, "ids"> = {}) =>
  async (
    dispatch: Dispatch<
      ProductActionType | LoaderActionType | HandleHTTPErrorProcesseType
    >
  ) => {
    dispatch(loadersActions.setLoader("products"));

    try {
      const { data, total } = await productsAPI.getProducts<ProductType>({
        params,
      });

      dispatch(
        productsActions.setProducts({
          products: data,
          total,
        })
      );
    } catch (error: any) {
      dispatch(errorProcesses.handleHTTPError(error));
    }

    dispatch(loadersActions.removeLoader("products"));
  };

/**
 * ## Процесс создания нового продукта
 *
 * @param {ProductType} data - Данные продукта
 *
 * @returns {void}
 */
const addProduct =
  (data: ProductType) =>
  async (
    dispatch: Dispatch<ProductActionType | HandleHTTPErrorProcesseType>
  ) => {
    try {
      await productsAPI.addProduct(data);

      dispatch(productsActions.addProduct(data));
    } catch (error: any) {
      dispatch(errorProcesses.handleHTTPError(error));
    }
  };

/**
 * ## Процесс редактирования продукта
 *
 * @param {ProductType[]} data - Cписок продуктов
 * @param {object} params - Параметры запроса
 *
 * @returns {void}
 */
const saveProducts =
  (data: ProductType[], params: Pick<ParamsListType, "ids">) =>
  async (
    dispatch: Dispatch<ProductActionType | HandleHTTPErrorProcesseType>
  ) => {
    try {
      dispatch(
        productsActions.setProductsForEdit({
          products: [],
          total: 0,
        })
      );

      await productsAPI.saveProducts(data, { params });

      if (params.ids) {
        dispatch(
          productsActions.saveProducts({
            ids: params.ids.split(","),
            products: data,
          })
        );
      }
    } catch (error: any) {
      dispatch(errorProcesses.handleHTTPError(error));
    }
  };

/**
 * ## Процесс получения продуктов по id
 *
 * @param {object} params - Параметры запроса
 *
 * @returns {void}
 */
const getProductsByIds =
  (params: Pick<ParamsListType, "ids">) =>
  async (
    dispatch: Dispatch<
      ProductActionType | LoaderActionType | HandleHTTPErrorProcesseType
    >
  ) => {
    dispatch(loadersActions.setLoader("productsEdit"));

    try {
      const { data, total } = await productsAPI.getProducts<ProductType>({
        params,
      });

      dispatch(
        productsActions.setProductsForEdit({
          products: data,
          total,
        })
      );
    } catch (error: any) {
      dispatch(errorProcesses.handleHTTPError(error));
    }

    dispatch(loadersActions.removeLoader("productsEdit"));
  };

/**
 * ## Процесс удаления продукта
 *
 * @param {object} params - Параметры запроса
 *
 * @returns {void}
 */
const deleteProducts =
  (params: Pick<ParamsListType, "ids">) =>
  async (
    dispatch: Dispatch<ProductActionType | HandleHTTPErrorProcesseType>
  ) => {
    try {
      await productsAPI.deleteProducts({ params });

      if (params.ids) {
        dispatch(productsActions.deleteProducts(params.ids.split(",")));
      }
    } catch (error: any) {
      dispatch(errorProcesses.handleHTTPError(error));
    }
  };

/**
 * ## Процесс получения настроект для отображения продукта
 *
 * @returns {void}
 */
const getSettingsFields =
  () =>
  async (
    dispatch: Dispatch<
      ProductActionType | LoaderActionType | HandleHTTPErrorProcesseType
    >
  ) => {
    dispatch(loadersActions.setLoader("settingsFields"));

    try {
      const { data } = await productsAPI.getSettingsFields<SettingsFieldType>();
      dispatch(productsActions.setSettingsFields(data));
    } catch (error: any) {
      dispatch(errorProcesses.handleHTTPError(error));
    }

    dispatch(loadersActions.removeLoader("settingsFields"));
  };

export const processes = {
  getProducts,
  addProduct,
  saveProducts,
  getProductsByIds,
  deleteProducts,
  getSettingsFields,
};
