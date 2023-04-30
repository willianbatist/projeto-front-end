import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type changeComponentsSlice = {
  value: string;
};

const initialState = {
  value: "processes",
} as changeComponentsSlice;

export const changeComponents = createSlice({
  name: "component",
  initialState,
  reducers: {
    reset: () => initialState,
    increment: (state, value) => {
      state.value = value.payload;
    },
    incrementByAmount: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const {
  increment,
  incrementByAmount,
  reset,
} = changeComponents.actions;
export default changeComponents.reducer;
