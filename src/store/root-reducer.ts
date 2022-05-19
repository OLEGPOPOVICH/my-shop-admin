import { combineReducers } from "redux";
import { authReducer } from "@features/auth";
import { loaderReducer } from "@features/loaders";
import { productsReducer } from "@features/products";
import { chatReducer } from "@features/chat";

export const rootReducer = combineReducers({
  loaderReducer,
  productsReducer,
  chatReducer,
  authReducer,
});

export type RootReducerType = ReturnType<typeof rootReducer>;
