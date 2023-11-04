import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeTheme: "red",
  custom1: "#0578FF",
  custom2: "#202020",
  custom3: "#404040",
  custom4: "#808080",
  custom5: "#FFFFFF",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      console.log(action);
      state.activeTheme = action.payload;
    },
  },
});
export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
