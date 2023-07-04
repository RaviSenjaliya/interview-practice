import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./Slice/CounterSlice";

const StoreTool = configureStore({
  reducer: {
    CounterSlice: CounterSlice,
  },
});

export default StoreTool;
