import { RootReducerType } from "@store";
import { GlobalErrorType } from "./types";

/**
 * ## [Селектор] Получить глобальную ошибку
 *
 * @returns {GlobalErrorType | null} глобальная ошибка
 */
const getError =
  () =>
  (state: RootReducerType): GlobalErrorType | null =>
    state.globalErrorsReducer.error;

/**
 * ## [Селектор] Получить признак наличия глобальной ошибки
 *
 * @returns {boolean} Признак наличия ошибки
 */
const getIsGlobalError =
  () =>
  (state: RootReducerType): boolean =>
    Boolean(state.globalErrorsReducer.error?.message);

/**
 * ## [Селектор] Получить список глобальных ошибок для модального окна
 *
 * @returns {GlobalErrorTypep[]} список глобальных ошибок
 */
const getModalErrors =
  () =>
  (state: RootReducerType): GlobalErrorType[] =>
    state.globalErrorsReducer.modalErrors;

/**
 * ## [Селектор] Получить признак наличия глобальной ошибки для модального окна
 *
 * @returns {boolean} Признак наличия ошибки
 */
const getIsGlobalModalErrors =
  () =>
  (state: RootReducerType): boolean =>
    Boolean(state.globalErrorsReducer.modalErrors.length);

export const selectors = {
  getError,
  getIsGlobalError,
  getModalErrors,
  getIsGlobalModalErrors,
};
