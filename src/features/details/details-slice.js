import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
export const loadCountryByName = createAsyncThunk(
  "@@details/load-country-by-name",
 (name, {extra: {client, api}}) => {
    return client.get(api.searchByCountry(name))
  }
);
// 1 создаю thunk
export const loadNeighboursByBorder = createAsyncThunk(
  "@@details/load-neighbours",
  (borders, {extra: {client, api}}) => {
  return client.get(api.filterByCode(borders))
})

const initialState = {
  currentCountry: null,
  neighbours: [],
  status: "idle",
  error: null
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
      .addCase(loadCountryByName.rejected,(state, action) => {
        state.status = "rejected";
        state.error = action.payload || action.meta.error;
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

export const selectCurrentCountry = (state => state.details.currentCountry);
export const selectDetails = (state => state.details);
export const selectNeighbours = (state => state.details.neighbours);

export const { clearDetails} = detailsSlice.actions;
export const detailsReducer = detailsSlice.reducer;