import { createSlice } from "@reduxjs/toolkit";

import movies from "../../assets/Flim.json";

const initialState = {
  discover: movies,
  watchedList: [],
  favouriteList: [],
};

export const moviesListSlice = createSlice({
  name: "moviesList",
  initialState,
  reducers: {
    addToWatchedList: (state, action) => {
      state.watchedList.push(action.payload);
    },
    addToFavouriteList: (state, action) => {
      state.favouriteList.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToWatchedList, addToFavouriteList } = moviesListSlice.actions;

export default moviesListSlice.reducer;
