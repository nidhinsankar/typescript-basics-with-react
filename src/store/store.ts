import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import issuesSlice from "./issuesSlice";
import GithubIssueSlice from "./GithubIssueSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    issues: issuesSlice,
    githubIssues: GithubIssueSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
