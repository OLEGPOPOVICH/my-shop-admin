import { RootReducerType } from "@store";
import { AuthUserType, ErrorType } from "./types";

/**
 * ## [Селектор] Получить признак авторизации
 *
 * @returns {boolean} Признак авторизации
 */
const getIsAuth =
  () =>
  (state: RootReducerType): boolean =>
    state.authReducer.isAuth;

/**
 * ## [Селектор] Получить данные авторизованного пользователя
 *
 * @returns {AuthUserType | null} данные пользователя
 */
const getUser =
  () =>
  (state: RootReducerType): AuthUserType | null =>
    state.authReducer.user;

/**
 * ## [Селектор] Получить признак регистрации
 *
 * @returns {boolean} Признак регистрации
 */
const getIsRegister =
  () =>
  (state: RootReducerType): boolean =>
    state.authReducer.isRegister;

/**
 * ## [Селектор] Получить ошибку авторизации/регистрации
 *
 * @returns {ErrorType} ошибка авторизации/регистрации
 */
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
