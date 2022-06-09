import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./root-reducer";

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
  });

export type RootReducerType = ReturnType<typeof rootReducer>;
export type AppStoreType = ReturnType<typeof setupStore>;
export type AppDispatchType = AppStoreType["dispatch"];
