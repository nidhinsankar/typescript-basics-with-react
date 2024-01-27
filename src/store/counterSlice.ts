import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface counterState {
  count: number;
  incrementCount: number;
}

const initialState: counterState = {
  count: 0,
  incrementCount: 1,
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += state.incrementCount;
    },
    decrement: (state) => {
      state.count -= state.incrementCount;
    },
    changeIncrementAmount: (state, action: PayloadAction<number>) => {
      state.incrementCount = action.payload;
    },
  },
});

export const { increment, decrement, changeIncrementAmount } =
  counterSlice.actions;
export default counterSlice.reducer;
