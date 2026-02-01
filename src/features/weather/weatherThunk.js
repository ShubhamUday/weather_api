import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCurrentWeather, getForecast } from "../../services/weather";

export const fetchCurrentWeather = createAsyncThunk(
    "weather/fetchCurrent",
    async ({ city, units }, { getState, rejectWithValue }) => {
        try {
            const state = getState();
            const cached = state.weather.current[city.id];

            if (cached) {
                const age = Date.now() - cached.fetchedAt;
                const isSameUnit = cached.units === units;
                if (age < 60_000 && isSameUnit) {
                    // Data is fresh, skip fetch
                    return cached;
                }
            }

            const data = await getCurrentWeather({
                lat: city.lat,
                lon: city.lon,
                units
            });

            return { data, fetchedAt: Date.now(), units };
        } catch {
            return rejectWithValue("Failed to fetch current weather");
        }
    }
);


export const fetchForecast = createAsyncThunk(
    "weather/fetchForecast",
    async ({ city, units }, { rejectWithValue }) => {
        try {
            return await getForecast({
                lat: city.lat,
                lon: city.lon,
                units
            });
        } catch (err) {
            return rejectWithValue("Failed to fetch forecast");
        }
    }
);
