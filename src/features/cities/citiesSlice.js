import { createSlice } from "@reduxjs/toolkit";

const DEFAULT_CITIES = [
  { id: "nyc", name: "New York", country: "US", lat: 40.7128, lon: -74.006 },
  { id: "lon", name: "London", country: "UK", lat: 51.5074, lon: -0.1278 },
  { id: "tok", name: "Tokyo", country: "JP", lat: 35.6762, lon: 139.6503 },
  { id: "syd", name: "Sydney", country: "AU", lat: -33.8688, lon: 151.2093 },
  { id: "cpt", name: "Cape Town", country: "ZA", lat: -33.9249, lon: 18.4241 }
];

const citiesSlice = createSlice({
  name: "cities",
  initialState: {
    list: DEFAULT_CITIES,
    favorites: [] // store city ids
  },
  reducers: {
    toggleFavorite(state, action) {
      const id = action.payload;
      state.favorites.includes(id)
        ? (state.favorites = state.favorites.filter(c => c !== id))
        : state.favorites.push(id);
    },
    addCity(state, action) {
      state.list.push(action.payload);
    }
  }
});

export const { toggleFavorite, addCity } = citiesSlice.actions;
export default citiesSlice.reducer;
