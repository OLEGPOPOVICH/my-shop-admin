/* eslint-disable @typescript-eslint/no-explicit-any */
import { AppDispatchType } from "@store";
import { AuthError, ServerError } from "@common/errors";
import { authActions } from "@features/auth";
import { globalErrorActions } from "@features/globalErrors";

/**
 * ## Процесс обработки глобальных ошибок API
 *
 * @param {any} error - Ошибка
 *
 * @returns {void}
 */

export const handleHTTPError = (error: any) => (dispatch: AppDispatchType) => {
  if (error instanceof AuthError) {
    dispatch(
      authActions.setIsAuth({
        isAuth: false,
        user: null,
      })
    );
  }

  if (error instanceof ServerError) {
    dispatch(globalErrorActions.setError({ message: error.message }));
  }

  if (error?.response) {
    const { baseURL, url } = error.response.config;
    const fullUrl = baseURL ? `${baseURL}/${url}` : url;
    dispatch(
      globalErrorActions.setModalError({
        message: `${fullUrl} - ${error.message}`,
      })
    );
  }
};

export const processes = {
  handleHTTPError,
};
