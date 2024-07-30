import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../Api";

// Async function to fetch a single service by ID with the correct endpoint
export const fetchServiceById = createAsyncThunk(
  "services/fetchServiceById",
  async (id) => {
    const response = await fetch(`${BASE_URL}services/${id}/id/`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log("Fetched service by ID:", data.data); // Add logging
    return data.data; // Access the nested data field
  }
);

// Async function to fetch all services, with optional category filter
export const fetchServices = createAsyncThunk(
  "services/fetchServices",
  async (sortBy) => {
    let url = `${BASE_URL}services/`;
    if (sortBy) {
      url += `?category_type=${sortBy}`;
    }
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log("Fetched services:", data.data); // Add logging
      return data.data; // Access the nested data field
    } catch (error) {
      console.error("Error fetching services:", error); // Add logging
      throw error;
    }
  }
);

// Async function to search services by name
export const searchServicesByName = createAsyncThunk(
  "services/searchServicesByName",
  async (name) => {
    const response = await fetch(`${BASE_URL}services/?name=${name}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log("Searched services by name:", data.data); // Add logging
    return data.data; // Access the nested data field
  }
);

const serviceSlice = createSlice({
  name: "services",
  initialState: {
    data: [],
    status: "idle",
    error: null,
    service: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchServices.pending, (state) => {
        state.status = "loading";
        console.log("Fetching services..."); // Add logging
      })
      .addCase(fetchServices.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
        console.log("Redux state updated with services:", state.data); // Add logging
      })
      .addCase(fetchServices.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        console.error("Error in Redux state:", action.error.message); // Add logging
      })
      .addCase(fetchServiceById.pending, (state) => {
        state.status = "loading";
        console.log("Fetching service by ID..."); // Add logging
      })
      .addCase(fetchServiceById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.service = action.payload;
        console.log("Redux state updated with service by ID:", state.service); // Add logging
      })
      .addCase(fetchServiceById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        console.error("Error in Redux state:", action.error.message); // Add logging
      })
      .addCase(searchServicesByName.pending, (state) => {
        state.status = "loading";
        console.log("Searching services by name..."); // Add logging
      })
      .addCase(searchServicesByName.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
        console.log("Redux state updated with searched services:", state.data); // Add logging
      })
      .addCase(searchServicesByName.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        console.error("Error in Redux state:", action.error.message); // Add logging
      });
  },
});

export const selectServices = (state) => state.services.data;
export const selectService = (state) => state.services.service;
export const selectServiceStatus = (state) => state.services.status;

export default serviceSlice.reducer;
