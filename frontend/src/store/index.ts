import { configureStore } from "@reduxjs/toolkit";
import changeComponents from "./features/changeComponentsSlice";


export const store = configureStore({
  reducer: {
    changeComponents,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
