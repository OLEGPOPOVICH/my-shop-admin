import { PayloadAction } from "@reduxjs/toolkit";
import { InitialState } from "./ducks";
import { GlobalErrorType } from "./types";

/**
 * ## [Экшин] Установить глобальную ошибку
 *
 * @param {InitialState} state Состояние модуля
 * @param {PayloadAction<AuthType>} action Экшин действия
 *
 * @returns {void}
 */
export const setError = (
  state: InitialState,
  { payload }: PayloadAction<GlobalErrorType>
): InitialState => ({
  ...state,
  error: payload,
});

/**
 * ## [Экшин] Установить глобальную ошибку для модального окна
 *
 * @param {InitialState} state Состояние модуля
 * @param {PayloadAction<AuthType>} action Экшин действия
 *
 * @returns {void}
 */
export const setModalError = (
  state: InitialState,
  { payload }: PayloadAction<GlobalErrorType>
): InitialState => ({
  ...state,
  modalErrors: [...state.modalErrors, payload],
});

/**
 * ## [Экшин] Удалить глобальные ошибки
 *
 * @returns {void}
 */
export const clearErrors = (): InitialState => ({
  error: null,
  modalErrors: [],
});
