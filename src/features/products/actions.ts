import { ProductType } from "./ducks";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const EDIT_PRODUCT = "EDIT_PRODUCT";
export const LOPAD_PRODUCTS = "LOPAD_PRODUCTS";

type AddProductActionType = {
  type: typeof ADD_PRODUCT;
  payload: ProductType;
};
type RemoveProductActionType = {
  type: typeof REMOVE_PRODUCT;
  payload: number;
};
type EditProductActionType = {
  type: typeof EDIT_PRODUCT;
  payload: Partial<ProductType>;
};
type LoadProductActionType = {
  type: typeof LOPAD_PRODUCTS;
  payload: ProductType[];
};

export type ProductActionType =
  | AddProductActionType
  | RemoveProductActionType
  | EditProductActionType
  | LoadProductActionType;

export const addProduct = (payload: ProductType): AddProductActionType => ({
  type: ADD_PRODUCT,
  payload,
});

export const removeProduct = (payload: number): RemoveProductActionType => ({
  type: REMOVE_PRODUCT,
  payload,
});

export const editProduct = (
  payload: Partial<ProductType>
): EditProductActionType => ({
  type: EDIT_PRODUCT,
  payload,
});

export const loadProduct = (payload: ProductType[]): LoadProductActionType => ({
  type: LOPAD_PRODUCTS,
  payload,
});
