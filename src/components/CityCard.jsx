const CityCard = ({ city, weather }) => {
  if (!weather) return null;

  return (
    <>
      <div className="bg-white rounded-xl p-4 shadow hover:shadow-md transition cursor-pointer">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-medium">
            {city.name}, {city.country}
          </h2>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt=""
            className="w-12 h-12"
          />
        </div>

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
    </>
  );
};

export default CityCard;
