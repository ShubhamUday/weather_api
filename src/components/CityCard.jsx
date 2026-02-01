import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../features/cities/citiesSlice";
import { openCityDetail } from "../features/ui/uiSlice";

const CityCard = ({ city, weather }) => {
  const dispatch = useDispatch();

  const favorites = useSelector((state) => state.cities.favorites);
  const isFavorite = favorites.includes(city.id);

  if (!weather || !weather.weather?.length) return null;

  return (
    <div className="relative bg-white rounded-xl p-4 shadow hover:shadow-md transition">
      {/* Favorite button (toggle)*/}
      <button
        onClick={() => dispatch(toggleFavorite(city.id))}
        aria-label="Toggle favorite"
        className={`
          absolute bottom-2 right-3 
          flex items-center justify-center 
          text-lg font-semibold
          transition-colors
          ${
            isFavorite
              ? "text-yellow-500"
              : "text-gray-400 hover:text-gray-200"
          }
        `}
      >
        ☆
      </button>

      {/* Clickable card content */}
      <div
        onClick={() => dispatch(openCityDetail(city.id))}
        className="cursor-pointer"
      >
        <div className="flex items-center gap-3">
          <h2 className="text-lg font-medium flex-1">
            {city.name}, {city.country}
          </h2>

          {/* Weather icon from OpenWeather API */}
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].description}
            className="w-12 h-12"
          />
        </div>

        {/* Temperature + description */}
        <div className="mt-4">
          <p className="text-3xl font-semibold">
            {Math.round(weather.main.temp)}°
          </p>
          <p className="text-gray-500 text-sm capitalize">
            {weather.weather[0].description}
          </p>
        </div>

        <div className="mt-4 text-sm text-gray-600 grid grid-cols-2 gap-y-1">
          <span>Humidity</span>
          <span>{weather.main.humidity}%</span>
          <span>Wind</span>
          <span>{weather.wind.speed}</span>
        </div>
      </div>
    </div>
  );
};

export default CityCard;
