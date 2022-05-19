import { RootReducerType } from "@src/store";
import { ErrorType } from "../products/types";
import { AuthUserType } from "./types";

export const isAuthSelectors =
  () =>
  (state: RootReducerType): boolean =>
    state.authReducer.isAuth;

export const authUserSelectors =
  () =>
  (state: RootReducerType): AuthUserType | null =>
    state.authReducer.user;

export const isRegisterSelectors =
  () =>
  (state: RootReducerType): boolean =>
    state.authReducer.isRegister;

export const errorSelectors =
  () =>
  (state: RootReducerType): ErrorType =>
    state.authReducer.error;
