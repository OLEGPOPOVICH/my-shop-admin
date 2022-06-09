import { createSlice } from "@reduxjs/toolkit";
import { setIsAuth, setIsRegister, setError } from "./actions";
import { AuthUserType, ErrorType } from "./types";

const initialState = {
  isAuth: false,
  isRegister: false,
  user: null as AuthUserType | null,
  authError: null as ErrorType,
};

export type InitialState = typeof initialState;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsAuth,
    setIsRegister,
    setError,
  },
});

export const authReducer = authSlice.reducer;
export const actions = {
  ...authSlice.actions,
};
