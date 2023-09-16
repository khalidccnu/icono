import { configureStore } from "@reduxjs/toolkit";
import iconsSlice from "./icons/iconsSlice.js";

const store = configureStore({
  reducer: {
    iconsSlice,
  },
});

export default store;
