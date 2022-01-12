import { GLOBAL_LOADER, PAGE_LOADER, LoaderActionType } from "./actions";

const initialState = {
  globalLoader: false,
  pageLoader: false,
};

export type InitialStateType = typeof initialState;

export const loaderReducer = (
  state = initialState,
  action: LoaderActionType
): InitialStateType => {
  switch (action.type) {
    case GLOBAL_LOADER:
      return {
        ...state,
        globalLoader: !state.globalLoader,
      };
    case PAGE_LOADER:
      return {
        ...state,
        pageLoader: !state.pageLoader,
      };
    default:
      return state;
  }
};
