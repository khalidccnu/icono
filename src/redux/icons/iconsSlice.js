import { createSlice } from "@reduxjs/toolkit";
import { getIcons } from "./iconsThunks.js";

const initialState = {
  icons: [],
  solidIcons: [],
  regularIcons: [],
  lightIcons: [],
  buildingCateIcons: [],
  mapsCateIcons: [],
  socialCateIcons: [],
  textFormattingCateIcons: [],
};

const iconsSlice = createSlice({
  name: "icons",
  initialState,
  reducers: {
    setSolidIcons: (state) => {
      state.solidIcons = state.icons.filter((icon) => icon.style === "solid");
    },
    setRegularIcons: (state) => {
      state.regularIcons = state.icons.filter(
        (icon) => icon.style === "regular",
      );
    },
    setLightIcons: (state) => {
      state.lightIcons = state.icons.filter((icon) => icon.style === "light");
    },
    setBuildingCateIcons: (state) => {
      state.buildingCateIcons = state.icons.filter(
        (icon) => icon.category === "building",
      );
    },
    setMapsCateIcons: (state) => {
      state.mapsCateIcons = state.icons.filter(
        (icon) => icon.category === "maps",
      );
    },
    setSocialCateIcons: (state) => {
      state.socialCateIcons = state.icons.filter(
        (icon) => icon.category === "social",
      );
    },
    setTextFormattingCateIcons: (state) => {
      state.textFormattingCateIcons = state.icons.filter(
        (icon) => icon.category === "text-formatting",
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getIcons.fulfilled, (state, action) => {
      state.icons = action.payload;
    });
  },
});

export const {
  setSolidIcons,
  setRegularIcons,
  setLightIcons,
  setBuildingCateIcons,
  setMapsCateIcons,
  setSocialCateIcons,
  setTextFormattingCateIcons,
} = iconsSlice.actions;
export default iconsSlice.reducer;
