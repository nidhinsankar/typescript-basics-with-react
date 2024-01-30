import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchIssues = createAsyncThunk<
  string[],
  void,
  { rejectValue: string }
>("fetch/githubIssues", async (_, thunkApi) => {
  try {
    const res = await fetch("https://api.github.com/repos/github/hub/issues");
    const data = await res.json();
    const issues = data.map((issue: { title: string }) => issue.title);
    return issues;
  } catch (error) {
    thunkApi.rejectWithValue("unable to fetch data");
  }
});

interface IssuesinitialState {
  issues: string[];
  loading: boolean;
  error: string | null;
}

const initialState: IssuesinitialState = {
  issues: [],
  loading: false,
  error: null,
};

const githubIssueSlice = createSlice({
  name: "github_issue",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchIssues.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchIssues.fulfilled, (state, action) => {
        state.loading = false;
        state.issues = action.payload;
      })
      .addCase(fetchIssues.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export default githubIssueSlice.reducer;
