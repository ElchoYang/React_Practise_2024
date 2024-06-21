import { configureStore } from "@reduxjs/toolkit";

import PostReducer from "./slice/PosterSlice";

export default configureStore({
  reducer: {
    Poster: PostReducer,
  },
});
