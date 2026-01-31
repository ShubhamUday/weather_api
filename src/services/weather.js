import weatherAPI from "../api/openWeather";

// Current weather for city cards (dashboard cards)
export const getCurrentWeather = async ({ lat, lon, units }) => {
    const { data } = await weatherAPI.get("/data/2.5/weather", {
        params: { lat, lon, units }
    });
    return data;
};

// Forecast for charts & detail view
export const getForecast = async ({ lat, lon, units }) => {
    const { data } = await weatherAPI.get("/data/2.5/forecast", {
        params: {
            lat,
            lon,
            units,
            exclude: "minutely"
        }
    });
    return data;
};

// City search
export const searchCities = async (query) => {
    if (!query) return [];
    const { data } = await weatherAPI.get("/geo/1.0/direct", {
        params: {
            q: query,
            limit: 5
        }
    });
    return data;
};