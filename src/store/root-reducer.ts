import { loaderReducer } from "@features/loaders";
import { productsReducer } from "@features/products";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  loaderReducer,
  productsReducer,
});

export type RootReducerType = ReturnType<typeof rootReducer>;
