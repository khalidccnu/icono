import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getIcons = createAsyncThunk("icons/getIcons", () => {
  return axios.get(`/icons.json`).then((response) => response.data);
});
