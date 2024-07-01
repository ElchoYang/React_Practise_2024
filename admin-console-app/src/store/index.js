import { configureStore } from "@reduxjs/toolkit";

import PostReducer from "./slice/PostSlice";
import SpinReducer from "./slice/SpinSlice";
import SecuritySlice from "./slice/SecuritySlice";

export default configureStore({
  reducer: {
    poster: PostReducer,
    spinner: SpinReducer,
    security: SecuritySlice,
  },
});
