import { getCurrentWeather, getForecast } from "../../services/weather";

export const fetchCurrentWeather = createAsyncThunk(
    "weather/fetchCurrent",
    async ({ city, units }, { rejectWithValue }) => {
        try {
            return await getCurrentWeather({
                lat: city.lat,
                lon: city.lon,
                units
            });
        } catch (err) {
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