import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeTheme: "red",
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
