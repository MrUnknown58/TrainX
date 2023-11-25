import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  from: [],
  to: [],
  stations: { source: "", destination: "" ,date: ""},
  ticketInfo: {
    passengers: [],
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
    setPassengerInfo: (state, action) => {
      state.ticketInfo.passengers.push({
        ...action.payload,
        id: state.ticketInfo.passengers.length,
      });
    },
    editPassengerInfo: (state, action) => {
      // state.ticketInfo.passengers.pop(action.payload)
      let edit = state.ticketInfo.passengers.filter(
        (passenger) => passenger.id !== action.payload.id
      );
      state.ticketInfo.passengers = [...edit, action.payload];
    },
    deletePassengerInfo: (state, action) => {
      state.ticketInfo.passengers = state.ticketInfo.passengers.filter(
        (passenger) => passenger.id !== action.payload.id
      );
    },
    updateTrainInfo: (state, action) => {
      state.ticketInfo.train = action.payload;
    },
    updateBillDetails: (state, action) => {
      state.billDetails = action.payload;
    },
    saveContactInfo: (state, action) => {
      state.contactInfo = action.payload;
    },
  },
});
export const {
  setFromStation,
  setToStation,
  setBookingStn,
  setPassengerInfo,
  editPassengerInfo,
  deletePassengerInfo,
  updateTrainInfo,
  updateBillDetails,
  saveContactInfo
} = stationsInfoSlice.actions;

export default stationsInfoSlice.reducer;
