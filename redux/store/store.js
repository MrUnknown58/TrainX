import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "../features/theme/themeSlice";
import counterSlice from "../features/counter/counterSlice";
import dummySlice from "../features/placeholderAPI/dummySlice";
import StationsInfoSlice from "../features/StationsInfo/StationsInfoSlice";
import reviewBookingSlice from "../features/ReviewBooking/reviewBookingSlice";
export const store = configureStore({
  reducer: {
    theme: themeSlice,
    counter: counterSlice,
    dummy: dummySlice,
    stationInfo: StationsInfoSlice,
    reviewBooking: reviewBookingSlice,
  },
});
