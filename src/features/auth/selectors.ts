import { RootReducerType } from "@store";
import { AuthUserType, ErrorType } from "./types";

const getIsAuth =
  () =>
  (state: RootReducerType): boolean =>
    state.authReducer.isAuth;

const getUser =
  () =>
  (state: RootReducerType): AuthUserType | null =>
    state.authReducer.user;

const getIsRegister =
  () =>
  (state: RootReducerType): boolean =>
    state.authReducer.isRegister;

const getError =
  () =>
  (state: RootReducerType): ErrorType =>
    state.authReducer.authError;

export const selectors = {
  getIsAuth,
  getUser,
  getIsRegister,
  getError,
};
