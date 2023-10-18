import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dummyValue: [],
};

export const dummySlice = createSlice({
  name: "dummy",
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.dummyValue += 1;
    },
    decrement: (state) => {
      state.dummyValue -= 1;
    },
    setDummyValue: (state, action) => {
      console.log(action.payload.data);
      state.dummyValue = action.payload.data;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, setDummyValue } = dummySlice.actions;

export default dummySlice.reducer;
