import { combineReducers } from "redux";
import { authReducer } from "@features/auth";
import { loadersReducer } from "@features/loaders";
import { productsReducer } from "@features/products";
import { chatReducer } from "@features/chat";
import { globalErrorsReducer } from "@features/globalErrors";

export const rootReducer = combineReducers({
  loadersReducer,
  productsReducer,
  chatReducer,
  authReducer,
  globalErrorsReducer,
});

export type RootReducerType = ReturnType<typeof rootReducer>;
