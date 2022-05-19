import { ErrorType, AuthUserType } from "./types";

export const SET_IS_AUTH = "SET_IS_AUTH";
export const SET_IS_REGISTER = "SET_IS_REGISTER";
export const SET_ERROR = "SET_ERROR";

type AuthType = {
  isAuth: boolean;
  user: AuthUserType | null;
};

type SetIsAuthActionType = {
  type: typeof SET_IS_AUTH;
  payload: AuthType;
};

type SetIsRegisterActionType = {
  type: typeof SET_IS_REGISTER;
  payload: boolean;
};

type SetErrorActionType = {
  type: typeof SET_ERROR;
  payload: ErrorType;
};

export type AuthActionType =
  | SetIsAuthActionType
  | SetIsRegisterActionType
  | SetErrorActionType;

export const setIsAuth = (payload: AuthType): SetIsAuthActionType => ({
  type: SET_IS_AUTH,
  payload,
});

export const setIsRegister = (payload: boolean): SetIsRegisterActionType => ({
  type: SET_IS_REGISTER,
  payload,
});

export const setError = (payload: ErrorType): SetErrorActionType => ({
  type: SET_ERROR,
  payload,
});
