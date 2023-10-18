import { createSlice } from "@reduxjs/toolkit";

export const apiStatusSlice = createSlice({
  name: "apiStatus",
  initialState: {},
  reducers: {
    startLoading: (state, action) => {
      return {
        ...state,
        [action.payload.apiEndpoint]: {
          isLoading: true,
          error: null,
          message: "",
        },
      };
    },
    loadingSucceeded: (state, action) => {
      return {
        ...state,
        [action.payload.apiEndpoint]: {
          isLoading: false,
          error: null,
          message: action.payload.message,
        },
      };
    },
    loadingFailed: (state, action) => {
      return {
        ...state,
        [action.payload.apiEndpoint]: {
          isLoading: false,
          error: action.payload.error,
          message: action.payload.message,
        },
      };
    },
    loadingStateReset: (state, action) => {
      return {
        ...state,
        [action.payload.apiEndpoint]: {
          isLoading: null,
          error: null,
          message: "",
        },
      };
    },
  },
});

export const {
  startLoading,
  loadingSucceeded,
  loadingFailed,
  loadingStateReset,
} = apiStatusSlice.actions;
