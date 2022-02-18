export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const EDIT_PRODUCT = "EDIT_PRODUCT";
export const SET_PRODUCTS = "SET_PRODUCTS";
export const SET_PRODUCTS_ERROR = "SET_PRODUCTS_ERROR";
export const SET_SETTINGS_FIELDS = "SET_SETTINGS_FIELDS";
export const SET_SETTINGS_FIELDS_ERROR = "SET_SETTINGS_FIELDS_ERROR";

import {
  ProductType,
  ProductsDataType,
  SettingsFieldType,
  ErrorType,
} from "./ducks";

type AddProductActionType = {
  type: typeof ADD_PRODUCT;
  payload: ProductType;
};
type RemoveProductActionType = {
  type: typeof REMOVE_PRODUCT;
  payload: string;
};
type EditProductActionType = {
  type: typeof EDIT_PRODUCT;
  payload: Partial<ProductType>;
};
type setProductsActionType = {
  type: typeof SET_PRODUCTS;
  payload: ProductsDataType;
};

type setProductsErrorActionType = {
  type: typeof SET_PRODUCTS_ERROR;
  payload: ErrorType;
};

type setSettingsFieldsActionType = {
  type: typeof SET_SETTINGS_FIELDS;
  payload: SettingsFieldType[];
};

type setSettingsFieldsErrorActionType = {
  type: typeof SET_SETTINGS_FIELDS_ERROR;
  payload: ErrorType;
};

export type ProductActionType =
  | AddProductActionType
  | RemoveProductActionType
  | EditProductActionType
  | setProductsActionType
  | setProductsErrorActionType
  | setSettingsFieldsActionType
  | setSettingsFieldsErrorActionType;

export const addProduct = (payload: ProductType): AddProductActionType => ({
  type: ADD_PRODUCT,
  payload,
});

export const removeProduct = (payload: string): RemoveProductActionType => ({
  type: REMOVE_PRODUCT,
  payload,
});

export const editProduct = (
  payload: Partial<ProductType>
): EditProductActionType => ({
  type: EDIT_PRODUCT,
  payload,
});

export const setProducts = (
  payload: ProductsDataType
): setProductsActionType => ({
  type: SET_PRODUCTS,
  payload,
});

export const setProductsError = (
  payload: ErrorType
): setProductsErrorActionType => ({
  type: SET_PRODUCTS_ERROR,
  payload,
});

export const setSettingsFields = (
  payload: SettingsFieldType[]
): setSettingsFieldsActionType => ({
  type: SET_SETTINGS_FIELDS,
  payload,
});

export const setSettingsFieldsError = (
  payload: ErrorType
): setSettingsFieldsErrorActionType => ({
  type: SET_SETTINGS_FIELDS_ERROR,
  payload,
});
