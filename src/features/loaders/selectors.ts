import { RootReducerType } from "@store";

export const loadersSelectors = () => (state: RootReducerType) =>
  state.loaderReducer.loaders;
