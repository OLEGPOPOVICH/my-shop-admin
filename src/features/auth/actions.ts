import { AuthType, ErrorType } from "./types";

export const SET_IS_AUTH = "SET_IS_AUTH";
export const SET_IS_REGISTER = "SET_IS_REGISTER";
export const SET_AUTH_ERROR = "SET_AUTH_ERROR";

type SetIsAuthActionType = {
  type: typeof SET_IS_AUTH;
  payload: AuthType;
};

type SetIsRegisterActionType = {
  type: typeof SET_IS_REGISTER;
  payload: boolean;
};

type SetAuthErrorActionType = {
  type: typeof SET_AUTH_ERROR;
  payload: ErrorType;
};

export type AuthActionType =
  | SetIsAuthActionType
  | SetIsRegisterActionType
  | SetAuthErrorActionType;

const setIsAuth = (payload: AuthType): SetIsAuthActionType => ({
  type: SET_IS_AUTH,
  payload,
});

const setIsRegister = (payload: boolean): SetIsRegisterActionType => ({
  type: SET_IS_REGISTER,
  payload,
});

const setError = (payload: ErrorType): SetAuthErrorActionType => ({
  type: SET_AUTH_ERROR,
  payload,
});

export const actions = {
  setIsAuth,
  setIsRegister,
  setError,
};
