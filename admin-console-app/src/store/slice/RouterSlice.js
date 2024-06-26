import { createSlice } from "@reduxjs/toolkit";

const RouterSlice = createSlice({
  name: "router",
  initialState: { list: [] },
  reducers: {
    setRoutes: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setRoutes } = RouterSlice.actions;

export default RouterSlice.reducer;
