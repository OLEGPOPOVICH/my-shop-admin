import { PayloadAction } from "@reduxjs/toolkit";
import { InitialState } from "./ducks";
import { AuthType, ErrorType } from "./types";

/**
 * ## [Экшин] Установить состояние авторизации
 *
 * @param {InitialState} state Состояние модуля
 * @param {PayloadAction<AuthType>} action Экшин действия
 *
 * @returns {void}
 */
export const setIsAuth = (
  state: InitialState,
  { payload }: PayloadAction<AuthType>
): InitialState => ({
  ...state,
  ...payload,
  authError: null,
});

/**
 * ## [Экшин] Установить состояние регистрации
 *
 * @param {InitialState} state Состояние модуля
 * @param {PayloadAction<boolean>} action Экшин действия
 *
 * @returns {void}
 */
export const setIsRegister = (
  state: InitialState,
  { payload }: PayloadAction<boolean>
): InitialState => ({
  ...state,
  isRegister: payload,
  authError: null,
});

/**
 * ## [Экшин] Установить ошибку авторизации/регистрации
 *
 * @param {InitialState} state Состояние модуля
 * @param {PayloadAction<ErrorType>} action Экшин действия
 *
 * @returns {void}
 */
export const setError = (
  state: InitialState,
  { payload }: PayloadAction<ErrorType>
): InitialState => ({
  ...state,
  authError: payload,
});
