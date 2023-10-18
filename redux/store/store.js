import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "../features/theme/themeSlice";
import counterSlice from "../features/counter/counterSlice";
import dummySlice from "../features/placeholderAPI/dummySlice";

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    counter: counterSlice,
    dummy: dummySlice,
  },
});
