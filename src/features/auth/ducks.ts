import {
  AuthActionType,
  SET_ERROR,
  SET_IS_AUTH,
  SET_IS_REGISTER,
} from "./actions";
import { ErrorType, AuthUserType } from "./types";

const initialState = {
  isAuth: false,
  isRegister: false,
  user: null as AuthUserType | null,
  error: null as ErrorType,
};

type InitialStateType = typeof initialState;

export const authReducer = (
  state = initialState,
  action: AuthActionType
): InitialStateType => {
  switch (action.type) {
    case SET_IS_AUTH:
      return {
        ...state,
        ...action.payload,
        error: null,
      };
    case SET_IS_REGISTER:
      return {
        ...state,
        isRegister: action.payload,
        error: null,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
