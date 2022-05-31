import { RootReducerType } from "@store";
import { GlobalErrorType } from "./types";

const getError =
  () =>
  (state: RootReducerType): GlobalErrorType | null =>
    state.globalErrorReducer.error;

const getIsGlobalError =
  () =>
  (state: RootReducerType): boolean =>
    Boolean(state.globalErrorReducer.error?.message);

const getModalErrors =
  () =>
  (state: RootReducerType): GlobalErrorType[] =>
    state.globalErrorReducer.modalErrors;

const getIsGlobalModalErrors =
  () =>
  (state: RootReducerType): boolean =>
    Boolean(state.globalErrorReducer.modalErrors.length);

export const selectors = {
  getError,
  getIsGlobalError,
  getModalErrors,
  getIsGlobalModalErrors,
};
