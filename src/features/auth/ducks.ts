import {
  AuthActionType,
  SET_AUTH_ERROR,
  SET_IS_AUTH,
  SET_IS_REGISTER,
} from "./actions";
import { AuthUserType, ErrorType } from "./types";

const initialState = {
  isAuth: false,
  isRegister: false,
  user: null as AuthUserType | null,
  authError: null as ErrorType,
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
        authError: null,
      };
    case SET_IS_REGISTER:
      return {
        ...state,
        isRegister: action.payload,
        authError: null,
      };
    case SET_AUTH_ERROR:
      return {
        ...state,
        authError: action.payload,
      };
    default:
      return state;
  }
};
