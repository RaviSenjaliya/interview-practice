import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

const CounterSlice = createSlice({
  name: "Counter",
  initialState,
  reducers: {
    additem(state, action) {
      return state + 1;
    },
    lessitem(state, action) {
      return state - 1;
    },
  },
});

export const { additem, lessitem } = CounterSlice.actions;

export default CounterSlice.reducer;
