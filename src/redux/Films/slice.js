import { createSlice } from "@reduxjs/toolkit";

import {
  addCountry,
  getCountry,
  getCountryById,
} from "./operation";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const countrySlice = createSlice({
  name: "country",
  initialState: {
    items: [],
    itemsById: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCountry.pending, handlePending)
      .addCase(getCountry.fulfilled, (state, action) => {
        state.items = action.payload;
        state.itemsById = [];
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getCountry.rejected, handleRejected)
      .addCase(getCountryById.pending, handlePending)
      .addCase(getCountryById.fulfilled, (state, action) => {
        state.itemsById = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getCountryById.rejected, handleRejected)
      .addCase(addCountry.pending, handlePending)
      .addCase(addCountry.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addCountry.rejected, handleRejected);
  },
});

export const countryReducer = countrySlice.reducer;
