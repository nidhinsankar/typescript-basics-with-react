import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import issuesSlice from "./issuesSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    issues: issuesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
