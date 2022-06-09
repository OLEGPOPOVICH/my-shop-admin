import { createSlice } from "@reduxjs/toolkit";
import {
  setProducts,
  saveProducts,
  setProductsForEdit,
  setSettingsFields,
} from "./actions";
import { ProductType, SettingsFieldType } from "./types";

const initialState = {
  productsData: {
    products: [] as ProductType[],
    total: 0,
  },
  productsDataForEdit: {
    products: [] as ProductType[],
    total: 0,
  },
  settingsFields: [] as SettingsFieldType[],
};

export type InitialState = typeof initialState;

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts,
    saveProducts,
    setProductsForEdit,
    setSettingsFields,
  },
});

export const productsReducer = productsSlice.reducer;
export const actions = {
  ...productsSlice.actions,
};
