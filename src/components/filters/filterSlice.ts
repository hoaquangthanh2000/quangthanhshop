import { createSlice } from "@reduxjs/toolkit";

const initState = {
  categories: [] as string[],
  search: "",
};
export const filterSlice = createSlice({
  name: "filters",
  initialState: initState,
  reducers: {
    categoryFilter: (state, action) => {
      state.categories.push(action.payload);
    },
    removeCategory: (state, action) => {
      state.categories = state.categories.filter(
        (item) => item !== action.payload
      );
    },
    filterSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { categoryFilter, removeCategory, filterSearch } =
  filterSlice.actions;
