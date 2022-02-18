export const TOGGLE_GLOBAL_LOADER = "TOGGLE_GLOBAL_LOADER";
export const SET_LOADER = "SET_PAGE_LOADER";
export const REMOVE_LOADER = "REMOVE_PAGE_LOADER";

type ToggleGlobalLoaderActionType = {
  type: typeof TOGGLE_GLOBAL_LOADER;
};

type SetLoaderActionType = {
  type: typeof SET_LOADER;
  payload: string;
};

type RemoveLoaderActionType = {
  type: typeof REMOVE_LOADER;
  payload: string;
};

export type LoaderActionType =
  | ToggleGlobalLoaderActionType
  | SetLoaderActionType
  | RemoveLoaderActionType;

export const toggleGlobalLoader = (): ToggleGlobalLoaderActionType => ({
  type: TOGGLE_GLOBAL_LOADER,
});

export const setLoader = (payload: string): SetLoaderActionType => ({
  type: SET_LOADER,
  payload,
});

export const removeLoader = (payload: string): RemoveLoaderActionType => ({
  type: REMOVE_LOADER,
  payload,
});
