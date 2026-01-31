import { createSlice } from "@reduxjs/toolkit";
import { fetchCitySuggestions } from "./citiesThunk";


const DEFAULT_CITIES = [
  { id: "nyc", name: "New York", country: "US", lat: 40.7128, lon: -74.006 },
  { id: "lon", name: "London", country: "UK", lat: 51.5074, lon: -0.1278 },
  { id: "tok", name: "Tokyo", country: "JP", lat: 35.6762, lon: 139.6503 },
  { id: "syd", name: "Sydney", country: "AU", lat: -33.8688, lon: 151.2093 },
  { id: "cpt", name: "Cape Town", country: "ZA", lat: -33.9249, lon: 18.4241 }
];

const storedFavorites = JSON.parse(
  localStorage.getItem("favorites") || "[]"
);

const citiesSlice = createSlice({
  name: "cities",
  initialState: {
    list: DEFAULT_CITIES,
    favorites: storedFavorites,
    search: {
      results: [],
      loading: false,
      error: null
    }
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
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCitySuggestions.pending, state => {
        state.search.loading = true;
        state.search.error = null;
      })
      .addCase(fetchCitySuggestions.fulfilled, (state, action) => {
        state.search.loading = false;
        state.search.results = action.payload;
      })
      .addCase(fetchCitySuggestions.rejected, (state, action) => {
        state.search.loading = false;
        state.search.error = action.payload;
      });
  }

});

export const { toggleFavorite, addCity } = citiesSlice.actions;
export default citiesSlice.reducer;
