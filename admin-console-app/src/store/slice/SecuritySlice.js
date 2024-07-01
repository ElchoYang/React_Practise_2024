import { createSlice } from "@reduxjs/toolkit";

const SecuritySlice = createSlice({
  name: "router",
  initialState: {
    token: "",
    menus: [],
  },
  reducers: {
    setMenus: (state, action) => {
      state.menus = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { setMenus, setToken } = SecuritySlice.actions;

export default SecuritySlice.reducer;
