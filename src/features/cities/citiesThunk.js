import { createAsyncThunk } from "@reduxjs/toolkit";
import { searchCities } from "../../services/weather";

export const fetchCitySuggestions = createAsyncThunk(
    "cities/search",
    async (query, { rejectWithValue }) => {
        try {
            return await searchCities(query);
        } catch {
            return rejectWithValue("Failed to search cities");
        }
    }
);
