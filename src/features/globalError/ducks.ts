import {
  GlobalErrorActionsType,
  SET_GLOBAL_ERROR,
  SET_GLOBAL_MODAL_ERROR,
  CLEAR_GLOBAL_ERRORS,
} from "./actions";
import { GlobalErrorType } from "./types";

const initialState = {
  error: null as GlobalErrorType | null,
  modalErrors: [] as GlobalErrorType[],
};

export type GlobalErrorsType = typeof initialState;

export const globalErrorReducer = (
  state = initialState,
  action: GlobalErrorActionsType
): GlobalErrorsType => {
  switch (action.type) {
    case SET_GLOBAL_ERROR:
      return {
        ...state,
        error: { ...action.payload },
      };
    case SET_GLOBAL_MODAL_ERROR:
      return {
        ...state,
        modalErrors: [...state.modalErrors, action.payload],
      };
    case CLEAR_GLOBAL_ERRORS:
      return {
        error: null,
        modalErrors: [],
      };
    default:
      return state;
  }
};
