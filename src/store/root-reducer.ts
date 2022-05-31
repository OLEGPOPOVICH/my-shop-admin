import { combineReducers } from "redux";
import { authReducer } from "@features/auth";
import { loaderReducer } from "@features/loaders";
import { productsReducer } from "@features/products";
import { chatReducer } from "@features/chat";
import { globalErrorReducer } from "@features/globalError";

export const rootReducer = combineReducers({
  loaderReducer,
  productsReducer,
  chatReducer,
  authReducer,
  globalErrorReducer,
});

export type RootReducerType = ReturnType<typeof rootReducer>;
