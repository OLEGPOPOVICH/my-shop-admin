import { RootReducerType } from "@store";
import { LoadersType } from "./types";

/**
 * ## [Селектор] Получить состояния загрузки
 *
 * @returns {LoadersType} Состояния загрузки
 */
const getLoaders =
  () =>
  (state: RootReducerType): LoadersType =>
    state.loadersReducer.loaders;

export const selectors = {
  getLoaders,
};
