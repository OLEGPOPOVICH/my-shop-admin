/* eslint-disable @typescript-eslint/no-explicit-any */
import { AppDispatchType } from "@store";
import { AuthService } from "@services";
import { authActions, UserRegisterType, UserLoginType } from "@features/auth";
import { errorProcesses } from "@processes/error";
import { loadersActions } from "@features/loaders";

/**
 * ## Процесс регистрации
 *
 * @param {UserRegisterType} data - Данные для регистрации
 *
 * @returns {void}
 */
const register =
  (data: UserRegisterType) => async (dispatch: AppDispatchType) => {
    try {
      const response = await AuthService.register(data);

      if (response.data.meta.statusText === "ok") {
        dispatch(authActions.setIsRegister(true));
        return;
      }

      dispatch(authActions.setError(response.data.meta.desc));
    } catch (error: any) {
      dispatch(errorProcesses.handleHTTPError(error));
    }
  };

/**
 * ## Процесс авторизации
 *
 * @param {UserLoginType} data - Данные для авторизации
 *
 * @returns {void}
 */
const login = (data: UserLoginType) => async (dispatch: AppDispatchType) => {
  try {
    const response = await AuthService.login(data);

    if (response.data.meta.statusText === "ok") {
      localStorage.setItem("token", response.data.data.accessToken);
      dispatch(
        authActions.setIsAuth({
          isAuth: true,
          user: response.data.data.user,
        })
      );
      return;
    }

    dispatch(authActions.setError(response.data.meta.desc));
  } catch (error: any) {
    dispatch(errorProcesses.handleHTTPError(error));
  }
};

/**
 * ## Процесс проверки авторизации
 *
 * @returns {void}
 */
const checkAuth = () => async (dispatch: AppDispatchType) => {
  try {
    dispatch(loadersActions.setLoader("checkAuth"));
    const response = await AuthService.checkAuth();
    localStorage.setItem("token", response.data.data.accessToken);
    dispatch(
      authActions.setIsAuth({
        isAuth: true,
        user: response.data.data.user,
      })
    );
  } catch (error: any) {
    dispatch(errorProcesses.handleHTTPError(error));
  }

  dispatch(loadersActions.removeLoader("checkAuth"));
};

/**
 * ## Процесс разлогирования
 *
 * @returns {void}
 */
const logout = () => async (dispatch: AppDispatchType) => {
  try {
    localStorage.removeItem("token");
    await AuthService.logout();
    dispatch(
      authActions.setIsAuth({
        isAuth: false,
        user: null,
      })
    );
  } catch (error: any) {
    dispatch(errorProcesses.handleHTTPError(error));
  }
};

export const processes = {
  register,
  login,
  checkAuth,
  logout,
};
