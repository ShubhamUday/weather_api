import axios from 'axios';

const BASE_URL = import.meta.env.VITE_WEATHER_BASE_URL
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY

export const weatherAPI = axios.create({
    baseURL: BASE_URL,
    params: {
        appid: API_KEY
    }
})

export default weatherAPI;