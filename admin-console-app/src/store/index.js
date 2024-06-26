import { configureStore } from "@reduxjs/toolkit";

import PostReducer from "./slice/PostSlice";
import SpinReducer from "./slice/SpinSlice";
import RouterSlice from "./slice/RouterSlice";

export default configureStore({
  reducer: {
    poster: PostReducer,
    spinner: SpinReducer,
    router: RouterSlice,
  },
});
