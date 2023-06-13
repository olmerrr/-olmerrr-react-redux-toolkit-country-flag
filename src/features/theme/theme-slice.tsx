import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type Theme = "light" | "dark";
// могу описать и внешне
// const initialState: Theme = "light";
const themeSlice = createSlice({
  name: "@@theme",
  initialState: "light" as Theme,
  reducers: {
    setTheme: (_, action:PayloadAction<Theme>) => action.payload
  }
});

export const {setTheme} = themeSlice.actions;
export const themeReducer = themeSlice.reducer;