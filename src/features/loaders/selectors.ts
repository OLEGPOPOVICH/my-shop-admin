import { RootReducerType } from "@store";

const getLoaders = () => (state: RootReducerType) =>
  state.loaderReducer.loaders;

export const selectors = {
  getLoaders,
};
