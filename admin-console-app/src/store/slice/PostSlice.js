import { createSlice } from "@reduxjs/toolkit";

const PostSlice = createSlice({
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

export const { add, list } = PostSlice.actions;

export default PostSlice.reducer;
