import { RootState } from "store";

export const selectCurrentCountry = ((state:RootState) => state.details.currentCountry);
export const selectDetails = ((state:RootState) => state.details);
export const selectNeighbours = ((state:RootState) => state.details.neighbours);
