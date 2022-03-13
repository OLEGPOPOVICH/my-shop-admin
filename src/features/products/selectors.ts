import { RootReducerType } from "@store";

export const productsDataSelectors = () => (state: RootReducerType) =>
  state.productsReducer.productsData;

export const productsDataForEditSelectors = () => (state: RootReducerType) =>
  state.productsReducer.productsDataForEdit;

export const productsSelectors = () => (state: RootReducerType) =>
  state.productsReducer.productsData.products;

export const productsErrorSelectors = () => (state: RootReducerType) =>
  state.productsReducer.errors.products;

export const settingsFieldsSelectors = () => (state: RootReducerType) =>
  state.productsReducer.settingsFields;

export const settingsFieldsErrorSelectors = () => (state: RootReducerType) =>
  state.productsReducer.errors.settingsFields;
