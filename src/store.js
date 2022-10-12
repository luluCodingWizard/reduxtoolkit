import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./Count/countSlice";

export const store = configureStore({
  reducer: {
    countSliceReducer: countReducer,
  },
});
