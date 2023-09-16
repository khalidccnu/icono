import { createSlice } from "@reduxjs/toolkit";
import { getIcons } from "./iconsThunks.js";

const initialState = {
  icons: [],
  solidIcons: [],
  regularIcons: [],
  lightIcons: [],
  buildingCateIcons: [],
  editingCateIcons: [],
  mapsCateIcons: [],
  socialCateIcons: [],
  textFormattingCateIcons: [],
  usersPeopleCateIcons: [],
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
      state.buildingCateIcons = state.icons.filter((icon) =>
        icon.categories.includes("building"),
      );
    },
    setEditingCateIcons: (state) => {
      state.editingCateIcons = state.icons.filter((icon) =>
        icon.categories.includes("editing"),
      );
    },
    setMapsCateIcons: (state) => {
      state.mapsCateIcons = state.icons.filter((icon) =>
        icon.categories.includes("maps"),
      );
    },
    setSocialCateIcons: (state) => {
      state.socialCateIcons = state.icons.filter((icon) =>
        icon.categories.includes("social"),
      );
    },
    setTextFormattingCateIcons: (state) => {
      state.textFormattingCateIcons = state.icons.filter((icon) =>
        icon.categories.includes("text-formatting"),
      );
    },
    setUsersPeopleCateIcons: (state) => {
      state.usersPeopleCateIcons = state.icons.filter((icon) =>
        icon.categories.includes("users-people"),
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
  setEditingCateIcons,
  setMapsCateIcons,
  setSocialCateIcons,
  setTextFormattingCateIcons,
  setUsersPeopleCateIcons,
} = iconsSlice.actions;
export default iconsSlice.reducer;
