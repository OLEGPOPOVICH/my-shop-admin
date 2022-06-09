import { createSlice } from "@reduxjs/toolkit";
import { setError, setModalError, clearErrors } from "./actions";
import { GlobalErrorType } from "./types";

export const initialState = {
  error: null as GlobalErrorType | null,
  modalErrors: [] as GlobalErrorType[],
};

export type InitialState = typeof initialState;

const globalErrorSlice = createSlice({
  name: "globalErrors",
  initialState,
  reducers: {
    setError,
    setModalError,
    clearErrors,
  },
});

export const globalErrorsReducer = globalErrorSlice.reducer;
export const actions = {
  ...globalErrorSlice.actions,
};
