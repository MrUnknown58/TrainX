import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  from: [],
  to: [],
};

export const reviewBookingSlice = createSlice({
  name: "reviewBooking",
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
  },
});
export const { setFromStation, setToStation } = reviewBookingSlice.actions;

export default reviewBookingSlice.reducer;
