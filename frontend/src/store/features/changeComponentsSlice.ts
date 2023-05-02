import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { changeComponentsSlice } from "../../types";


const initialState = {
  value: "processes",
  isReload: 1,
} as changeComponentsSlice;

export const changeComponents = createSlice({
  name: "component",
  initialState,
  reducers: {
    reset: () => initialState,
    increment: (state, value) => {
      state.value = value.payload;
    },
    isReloadData: (state, value) => {
      state.isReload += value.payload;
    },
    incrementByAmount: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const {
  isReloadData,
  increment,
  incrementByAmount,
  reset,
} = changeComponents.actions;
export default changeComponents.reducer;
