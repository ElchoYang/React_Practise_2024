import { createSlice } from "@reduxjs/toolkit";

const PostSlice = createSlice({
  name: "post",
  initialState: {
    list: [],
    isOpen: false,
    currentPost: {},
  },
  reducers: {
    add: (state, action) => {
      state.list = [action.payload, ...state.list];
    },
    edit: (state, action) => {
      state.list.forEach((item, index) => {
        if (item.id == action.payload.id) {
          console.log(action.payload.id);
          console.log(item.id);
          state.list[index] = action.payload;
        }
      });
    },
    remove: (state, action) => {
      state.list.forEach((item, index) => {
        if (item.id == action.payload) state.list.splice(index, 1);
      });
    },
    initList: (state, action) => {
      state.list = action.payload;
      console.log("initList", state.list);
    },
    startPost: (state, action) => {
      state.isOpen = action.payload;
    },
    saveCurrentPost: (state, action) => {
      state.currentPost = action.payload || {
        id: null,
        title: "",
        content: "",
      };
    },
  },
});

export const { add, edit, remove, initList, startPost, saveCurrentPost } =
  PostSlice.actions;

export default PostSlice.reducer;
