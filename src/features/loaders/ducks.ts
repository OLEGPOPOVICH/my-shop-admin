import { createSlice } from "@reduxjs/toolkit";
import { setLoader, removeLoader } from "./actions";
import { LoadersType } from "./types";

const initialState = {
  globalLoader: false,
  loaders: {} as LoadersType,
};

export type InitialState = typeof initialState;

const loadersSlice = createSlice({
  name: "loaders",
  initialState,
  reducers: {
    setLoader,
    removeLoader,
  },
});

export const loadersReducer = loadersSlice.reducer;
export const actions = {
  ...loadersSlice.actions,
};
