import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  from: [],
  to: [],
  stations: { source: "", destination: "" },
  ticketInfo: {
    passengers: [{ id: "", name: "", age: "", gender: "", nationality: "" }],
    contactInfo: { phone: "", email: "" },
    train: {
      pnr: "1234567890",
      id: "6547d91c082ca3b80954bdc3",
      train_name: "Duronto Express",
      train_id: "23184",
      source: "Chennai",
      destination: "Bangalore",
      arrival_time: "08:30",
      departure_time: "22:30",
      createdAt: "2023-11-05T18:04:12.766Z",
      updatedAt: "2023-11-05T18:04:12.766Z",
      booking_class: "general_class",
      seats: {
        id: "6547d91c082ca3b80954bdc3",
        general_class: 150,
        sleeper_class: null,
        first_class: 40,
      },
    },
  },
  billDetails: { base_fare: "3000", tax: "500" },
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
