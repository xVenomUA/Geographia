import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const BASE_URL = "https://664b634835bbda10987cc3dd.mockapi.io/";

export const getCountry = createAsyncThunk(
  "country/getCountries",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URL}country`);
      return response.data;
    } catch (error) {
     return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getCountryById = createAsyncThunk(
  "country/getFilmById",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URL}country/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addCountry = createAsyncThunk(
  "country/addCoutry",
  async (country, thunkAPI) => {
    try {
      const response = await axios.post(`${BASE_URL}country`, country);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
