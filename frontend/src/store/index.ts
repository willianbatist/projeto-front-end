import { configureStore } from "@reduxjs/toolkit";
import changeComponents from "./features/changeComponentsSlice";


export const store = configureStore({
  reducer: {
    changeComponents,
  },
  devTools: process.env.NODE_ENV !== "production",
});


