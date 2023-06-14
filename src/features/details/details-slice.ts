import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Country, Extra, Status } from "types";

export const loadCountryByName = createAsyncThunk<
  { data: Country[] },
  string,
  { extra: Extra }
>(
  "@@details/load-country-by-name",
 (name, {extra: {client, api}}) => {
    return client.get(api.searchByCountry(name))
  }
);
// 1 создаю thunk
export const loadNeighboursByBorder = createAsyncThunk<
//   что ожидаем получить
  { data: Country[] },
//   что получаем на вход
  string[],
  { extra: Extra }

>(
  "@@details/load-neighbours",
  (borders, {extra: {client, api}}) => {
  return client.get(api.filterByCode(borders))
})

type DetailsSlice = {
  currentCountry: Country | null,
  neighbours: string[],
  status: Status,
  error: string | null
}
const initialState:DetailsSlice = {
  currentCountry: null,
  neighbours: [],
  status: "idle",
  error: ""
}
const detailsSlice = createSlice({
  name: "@@details",
  initialState,
  reducers: {
    clearDetails: () => initialState,
  },
  //extraReducers нужны  для работы с асинхронной логикой + реагируем на происходящее в других слайсах
  extraReducers: (builder) => {
    builder
      .addCase(loadCountryByName.pending,(state) => {
        state.status = "loading";
        state.error = null;
      } )
      .addCase(loadCountryByName.rejected,(state) => {
        state.status = "rejected";
        state.error = "Can't load data.";
      } )
      .addCase(loadCountryByName.fulfilled,(state, action) => {
        state.status = "received";
        state.currentCountry = action.payload.data[0];
      })
      // 2 добавляю экстраредюсер под него
      .addCase(loadNeighboursByBorder.fulfilled, (state, action) => {
      state.neighbours = action.payload.data.map(country => country.name)
  })
  }
});

export const { clearDetails} = detailsSlice.actions;
export const detailsReducer = detailsSlice.reducer;