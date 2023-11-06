import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  from: [],
  to: [],
  stations: { source: "", destination: "" },
};

export const stationsInfoSlice = createSlice({
  name: "stationInfo",
  initialState,
  reducers: {
    setFromStation: (state, action) => {
      console.log(action);
      state.from = action.payload.data;
    },
    setToStation: (state, action) => {
      console.log(action.payload);
      state.to = action.payload.data;
      console.log(state.to);
    },
    setBookingStn: (state, action) => {
      state.stations = action.payload;
    },
  },
});
export const { setFromStation, setToStation, setBookingStn } =
  stationsInfoSlice.actions;

export default stationsInfoSlice.reducer;
