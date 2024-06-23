import { createSlice } from "@reduxjs/toolkit";

const SpinSlice = createSlice({
  name: "spin",
  initialState: {
    spinning: false,
    count: 0,
  },
  reducers: {
    startSpinning: (state) => {
      state.spinning = true;
      state.count++;
    },
    endSpinning: (state) => {
      state.spinning = false;
      state.count--;
    },
  },
});

export const { startSpinning, endSpinning } = SpinSlice.actions;

export default SpinSlice.reducer;
