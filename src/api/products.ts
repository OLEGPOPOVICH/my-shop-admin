import { AxiosRequestConfig } from "axios";
import api from "./api";
import { ResponseTypeItem, ResponseTypeList, ResponseMetaType } from "./types";
import { ProductType } from "@features/products";

export const ACTIONS_URL = {
  DELETE: "delete",
  SAVE: "save",
  ADD: "add",
};
export const PRODUCTS_URL = "/products";
export const PRODUCT_URL = "/product";

export const PRODUCTS_SETTING_FIELDS_URL = "/products/settings-fields";

export const productsAPI = {
  getProducts: <T>(config: AxiosRequestConfig) =>
    api.get<ResponseTypeList<T>>(PRODUCTS_URL, config),

  getProduct: <T>(config: AxiosRequestConfig) =>
    api.get<ResponseTypeItem<T>>(PRODUCTS_URL, config),

  saveProducts: (data: ProductType[], config?: AxiosRequestConfig) =>
    api.patch<ResponseMetaType>(
      `${PRODUCTS_URL}/${ACTIONS_URL.SAVE}`,
      data,
      config
    ),

  addProduct: (data: ProductType) =>
    api.post<ResponseMetaType>(`${PRODUCT_URL}/${ACTIONS_URL.ADD}`, data),

  deleteProducts: (config?: AxiosRequestConfig) =>
    api.delete<ResponseMetaType>(
      `${PRODUCTS_URL}/${ACTIONS_URL.DELETE}`,
      config
    ),

  getSettingsFields: <T>() =>
    api.get<ResponseTypeList<T>>(PRODUCTS_SETTING_FIELDS_URL),
};
