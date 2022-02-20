import { AxiosRequestConfig } from "axios";
import api from "./api";
import { ResponseTypeItem, ResponseTypeList } from "./types";

export const PRODUCTS_URL = "/products";
export const PRODUCTS_SETTING_FIELDS_URL = "/products/settings-fields";

export const productsAPI = {
  getProducts: <T>(config: AxiosRequestConfig) =>
    api.get<ResponseTypeList<T>>(PRODUCTS_URL, config),

  getProduct: <T>(config: AxiosRequestConfig) =>
    api.get<ResponseTypeItem<T>>(PRODUCTS_URL, config),

  getSettingsFields: <T>() =>
    api.get<ResponseTypeList<T>>(PRODUCTS_SETTING_FIELDS_URL),
};
