import { Dispatch } from "react";
import { AuthError, ServerError } from "@common/errors";
import { authActions, AuthActionType } from "@features/auth";
import {
  globalErrorActions,
  GlobalErrorActionsType,
} from "@features/globalError";

/**
 * ## Процесс обработки глобальных ошибок API
 *
 * @param {any} error - Ошибка
 *
 * @returns {void}
 */
export const handleHTTPError =
  (error: any) =>
  (dispatch: Dispatch<AuthActionType | GlobalErrorActionsType>) => {
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
