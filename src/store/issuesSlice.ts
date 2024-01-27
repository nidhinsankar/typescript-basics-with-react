import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IssuesStateType {
  issues: string[];
}

const initialState: IssuesStateType = {
  issues: ["Bug issue 1", "Bug issue 2", "Bug issue 3"],
};

const issuesSlice = createSlice({
  name: "Issues",
  initialState,
  reducers: {
    addIssues: (state, action: PayloadAction<string>) => {
      state.issues = [...state.issues, action.payload];
    },
  },
});

export const { addIssues } = issuesSlice.actions;
export default issuesSlice.reducer;
