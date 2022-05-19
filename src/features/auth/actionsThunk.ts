/* eslint-disable no-console */
import { Dispatch } from "react";
import { AuthService } from "@src/services";
import { LoaderActionType, removeLoader, setLoader } from "@features/loaders";
import { AuthActionType, setError, setIsAuth, setIsRegister } from "./actions";
import { UserRegisterType, UserLoginType } from "./types";

export const registerActionThunk =
  (data: UserRegisterType) => async (dispatch: Dispatch<AuthActionType>) => {
    try {
      const response = await AuthService.register(data);

      if (response.data.meta.statusText === "ok") {
        localStorage.setItem("token", response.data.data.accessToken);
        dispatch(setIsRegister(true));
        return;
      }

      dispatch(setError(response.data.meta.desc));
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : error;
      console.error(errorMsg);
    }
  };

export const loginActionThunk =
  (data: UserLoginType) => async (dispatch: Dispatch<AuthActionType>) => {
    try {
      const response = await AuthService.login(data);

      if (response.data.meta.statusText === "ok") {
        localStorage.setItem("token", response.data.data.accessToken);
        dispatch(
          setIsAuth({
            isAuth: true,
            user: response.data.data.user,
          })
        );
        return;
      }

      dispatch(setError(response.data.meta.desc));
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : error;
      console.error(errorMsg);
    }
  };

export const checkAuthActionThunk =
  () => async (dispatch: Dispatch<AuthActionType | LoaderActionType>) => {
    try {
      dispatch(setLoader("checkAuth"));
      const token = localStorage.getItem("token");

      if (token) {
        const response = await AuthService.checkAuth();
        localStorage.setItem("token", response.data.data.accessToken);
        dispatch(
          setIsAuth({
            isAuth: true,
            user: response.data.data.user,
          })
        );
      }
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : error;
      console.error(errorMsg);
      dispatch(
        setIsAuth({
          isAuth: false,
          user: null,
        })
      );
      localStorage.removeItem("token");
    }

    dispatch(removeLoader("checkAuth"));
  };

export const logoutActionThunk =
  () => async (dispatch: Dispatch<AuthActionType>) => {
    try {
      localStorage.removeItem("token");
      await AuthService.logout();
      dispatch(
        setIsAuth({
          isAuth: false,
          user: null,
        })
      );
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : error;
      console.error(errorMsg);
    }
  };
