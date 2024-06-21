import { createSlice } from "@reduxjs/toolkit";

const PosterSlice = createSlice({
  name: "post",
  initialState: {
    value: [],
  },
  reducers: {
    add: (state, action) => {
      state.value.push(action.payload);
    },
    list: (state) => {},
  },
});

export const { add, list } = PosterSlice.actions;

export default PosterSlice.reducer;
