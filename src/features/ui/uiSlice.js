import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: "ui",
    initialState: {
        unit: "metric", // metric | imperial
        activeCityId: null,
        isDetailOpen: false
    },
    reducers: {
        toggleUnit(state) {
            state.unit = state.unit === "metric" ? "imperial" : "metric";
        },
        openCityDetail(state, action) {
            state.activeCityId = action.payload;
            state.isDetailOpen = true;
        },
        closeCityDetail(state) {
            state.activeCityId = null;
            state.isDetailOpen = false;
        }
    }
});

export const {
    toggleUnit,
    openCityDetail,
    closeCityDetail
} = uiSlice.actions;

export default uiSlice.reducer;
