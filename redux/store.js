import { configureStore } from "@reduxjs/toolkit";
import moviesListReducer from "./slices/movieSlice";

export const store = configureStore({
  reducer: {
    moviesList: moviesListReducer,
  },
});
