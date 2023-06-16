import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { Region } from "types";

interface ControlsSlice {
  search: string,
  region: Region | "",
  indexPath: string
}

const initialState:ControlsSlice = {
  search: "",
  region: "",
  indexPath: "/react-redux-toolkit-country-flag"
}

const controlsSlice = createSlice({
  name: "@@controls",
  initialState,
  reducers: {
    setSearch: (state, action:PayloadAction<string>) => {
      state.search = action.payload;
    },
    setRegion: (state, action:PayloadAction<Region | "">) => {
      state.region = action.payload;
    },
    clearControls: () => initialState
  }
});

// actions
export const {
  setSearch,
  setRegion,
  clearControls
} = controlsSlice.actions;
export const  controlsReducer = controlsSlice.reducer;