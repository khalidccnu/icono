import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterFamily: [],
  filterList: [],
  filterLicense: false,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilterList: (state, action) => {
      state.filterList = action.payload;
    },
    setFilterFamily: (state, action) => {
      state.filterFamily = action.payload;
    },
    setFilterLicense: (state) => {
      state.filterLicense = !state.filterLicense;
    },
  },
});

export const { setFilterFamily, setFilterList, setFilterLicense } =
  filterSlice.actions;
export default filterSlice.reducer;
