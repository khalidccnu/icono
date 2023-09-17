import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./filter/filterSlice.js";
import iconsSlice from "./icons/iconsSlice.js";

const store = configureStore({
  reducer: {
    filterSlice,
    iconsSlice,
  },
});

export default store;
