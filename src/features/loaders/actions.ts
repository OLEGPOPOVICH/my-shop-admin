export const SET_LOADER = "SET_PAGE_LOADER";
export const REMOVE_LOADER = "REMOVE_PAGE_LOADER";

type SetLoaderActionType = {
  type: typeof SET_LOADER;
  payload: string;
};

type RemoveLoaderActionType = {
  type: typeof REMOVE_LOADER;
  payload: string;
};

export type LoaderActionType = SetLoaderActionType | RemoveLoaderActionType;

const setLoader = (payload: string): SetLoaderActionType => ({
  type: SET_LOADER,
  payload,
});

const removeLoader = (payload: string): RemoveLoaderActionType => ({
  type: REMOVE_LOADER,
  payload,
});

export const actions = {
  setLoader,
  removeLoader,
};
