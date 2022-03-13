import {
  ErrorType,
  ProductsDataType,
  ProductType,
  ProductsSaveType,
  SettingsFieldType,
} from "./types";

export const ADD_PRODUCT = "ADD_PRODUCT";
export const DELETE_PRODUCTS = "DELETE_PRODUCTS";
export const EDIT_PRODUCT = "EDIT_PRODUCT";
export const SET_PRODUCTS = "SET_PRODUCTS";
export const SAVE_PRODUCTS = "SAVE_PRODUCTS";
export const SET_PRODUCTS_FOR_EDIT = "SET_PRODUCTS_FOR_EDIT";
export const SET_PRODUCTS_ERROR = "SET_PRODUCTS_ERROR";
export const SET_SETTINGS_FIELDS = "SET_SETTINGS_FIELDS";
export const SET_SETTINGS_FIELDS_ERROR = "SET_SETTINGS_FIELDS_ERROR";

type AddProductActionType = {
  type: typeof ADD_PRODUCT;
  payload: ProductType;
};

type DeleteProductsActionType = {
  type: typeof DELETE_PRODUCTS;
  payload: string[];
};

type EditProductActionType = {
  type: typeof EDIT_PRODUCT;
  payload: Partial<ProductType>;
};

type setProductsActionType = {
  type: typeof SET_PRODUCTS;
  payload: ProductsDataType;
};

type saveProductsActionType = {
  type: typeof SAVE_PRODUCTS;
  payload: ProductsSaveType;
};

type setProductsForEditActionType = {
  type: typeof SET_PRODUCTS_FOR_EDIT;
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
  | DeleteProductsActionType
  | EditProductActionType
  | setProductsActionType
  | saveProductsActionType
  | setProductsForEditActionType
  | setProductsErrorActionType
  | setSettingsFieldsActionType
  | setSettingsFieldsErrorActionType;

export const addProduct = (payload: ProductType): AddProductActionType => ({
  type: ADD_PRODUCT,
  payload,
});

export const deleteProducts = (
  payload: string[]
): DeleteProductsActionType => ({
  type: DELETE_PRODUCTS,
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

export const saveProducts = (
  payload: ProductsSaveType
): saveProductsActionType => ({
  type: SAVE_PRODUCTS,
  payload,
});

export const setProductsForEdit = (
  payload: ProductsDataType
): setProductsForEditActionType => ({
  type: SET_PRODUCTS_FOR_EDIT,
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
