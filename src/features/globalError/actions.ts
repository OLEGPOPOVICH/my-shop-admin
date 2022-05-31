import { GlobalErrorType } from "./types";

export const SET_GLOBAL_ERROR = "SET_GLOBAL_ERROR";
export const SET_GLOBAL_MODAL_ERROR = "SET_GLOBAL_MODAL_ERROR";
export const CLEAR_GLOBAL_ERRORS = "CLEAR_GLOBAL_ERROR";

type SetGlobalErrorActionType = {
  type: typeof SET_GLOBAL_ERROR;
  payload: GlobalErrorType;
};

type SetGlobalModalErrorActionType = {
  type: typeof SET_GLOBAL_MODAL_ERROR;
  payload: GlobalErrorType;
};

type ClearGlobalErrorActionType = {
  type: typeof CLEAR_GLOBAL_ERRORS;
};

export type GlobalErrorActionsType =
  | SetGlobalErrorActionType
  | SetGlobalModalErrorActionType
  | ClearGlobalErrorActionType;

const setError = (payload: GlobalErrorType): SetGlobalErrorActionType => ({
  type: SET_GLOBAL_ERROR,
  payload,
});

const setModalError = (
  payload: GlobalErrorType
): SetGlobalModalErrorActionType => ({
  type: SET_GLOBAL_MODAL_ERROR,
  payload,
});

const clearError = (): ClearGlobalErrorActionType => ({
  type: CLEAR_GLOBAL_ERRORS,
});

export const actions = {
  setError,
  setModalError,
  clearError,
};
