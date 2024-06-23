import { configureStore } from "@reduxjs/toolkit";

import PostReducer from "./slice/PostSlice";
import SpinReducer from "./slice/SpinSlice";

export default configureStore({
  reducer: {
    poster: PostReducer,
    spinner: SpinReducer,
  },
});
