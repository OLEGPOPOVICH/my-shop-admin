import { RootReducerType } from "@store";

const getProductsData = () => (state: RootReducerType) =>
  state.productsReducer.productsData;

const getProductsDataForEdit = () => (state: RootReducerType) =>
  state.productsReducer.productsDataForEdit;

const getProducts = () => (state: RootReducerType) =>
  state.productsReducer.productsData.products;

const getSettingsFields = () => (state: RootReducerType) =>
  state.productsReducer.settingsFields;

export const selectors = {
  getProductsData,
  getProductsDataForEdit,
  getProducts,
  getSettingsFields,
};
