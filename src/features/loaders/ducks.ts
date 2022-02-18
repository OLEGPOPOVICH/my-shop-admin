import {
  TOGGLE_GLOBAL_LOADER,
  SET_LOADER,
  REMOVE_LOADER,
  LoaderActionType,
} from "./actions";

const initialState = {
  globalLoader: false,
  loaders: {} as { [key: string]: boolean },
};

type InitialStateType = typeof initialState;

export const loaderReducer = (
  state = initialState,
  action: LoaderActionType
): InitialStateType => {
  switch (action.type) {
    case TOGGLE_GLOBAL_LOADER:
      return {
        ...state,
        globalLoader: !state.globalLoader,
      };
    case SET_LOADER:
      return {
        ...state,
        loaders: {
          ...state.loaders,
          [action.payload]: true,
        },
      };
    case REMOVE_LOADER:
      return {
        ...state,
        loaders: {
          ...state.loaders,
          [action.payload]: false,
        },
      };
    default:
      return state;
  }
};
