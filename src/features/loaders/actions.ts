import { PayloadAction } from "@reduxjs/toolkit";
import { InitialState } from "./ducks";

/**
 * ## [Экшин] Установить состояние загрузки
 *
 * @param {InitialState} state Состояние модуля
 * @param {PayloadAction<string>} action Экшин действия
 *
 * @returns {void}
 */
export const setLoader = (
  state: InitialState,
  { payload }: PayloadAction<string>
): InitialState => ({
  ...state,
  loaders: {
    ...state.loaders,
    [payload]: true,
  },
});

/**
 * ## [Экшин] Удалить состояние загрузки
 *
 * @param {InitialState} state Состояние модуля
 * @param {PayloadAction<string>} action Экшин действия
 *
 * @returns {void}
 */
export const removeLoader = (
  state: InitialState,
  { payload }: PayloadAction<string>
): InitialState => ({
  ...state,
  loaders: {
    ...state.loaders,
    [payload]: false,
  },
});
