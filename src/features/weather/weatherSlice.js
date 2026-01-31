import { createSlice } from "@reduxjs/toolkit";
import { fetchCurrentWeather, fetchForecast } from "./weatherThunk";

const weatherSlice = createSlice({
    name: "weather",
    initialState: {
        current: {},
        forecast: {},
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchCurrentWeather.pending, state => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCurrentWeather.fulfilled, (state, action) => {
                state.loading = false;

                state.current[action.meta.arg.city.id] = {
                    data: action.payload.data ?? action.payload,
                    fetchedAt: action.payload.fetchedAt ?? Date.now()
                };
            })
            .addCase(fetchCurrentWeather.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(fetchForecast.pending, state => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchForecast.fulfilled, (state, action) => {
                state.loading = false;
                state.forecast[action.meta.arg.city.id] = action.payload;
            })
            .addCase(fetchForecast.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});

export default weatherSlice.reducer;