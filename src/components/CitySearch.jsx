import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { fetchCitySuggestions } from "../features/cities/citiesThunk";
import { addCity } from "../features/cities/citiesSlice";

const CitySearch = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  const { results, loading, error } = useSelector(
    (state) => state.cities.search,
  );

  const existingCities = useSelector((state) => state.cities.list);

  useEffect(() => {
    if (query.trim().length < 2) return;
    dispatch(fetchCitySuggestions(query));
  }, [query, dispatch]);

  const handleAddCity = (city) => {
    const exists = existingCities.some(
      (c) => c.lat === city.lat && c.lon === city.lon,
    );
    if (exists) return;

    dispatch(
      addCity({
        id: `${city.lat}-${city.lon}`,
        name: city.name,
        country: city.country,
        lat: city.lat,
        lon: city.lon,
      }),
    );

    setQuery("");
  };

  return (
    <>
      <div className="relative max-w-md mx-auto mt-6">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search city..."
          className="w-full px-4 py-2 border rounded"
        />

        {loading && (
          <div className="absolute w-full bg-white border mt-1 p-2 text-sm">
            Searching...
          </div>
        )}

        {error && (
          <div className="absolute w-full bg-white border mt-1 p-2 text-sm text-red-500">
            {error}
          </div>
        )}

        {results.length > 0 && !loading && (
          <ul className="absolute w-full bg-white border mt-1 rounded shadow z-10">
            {results.map((city) => (
              <li
                key={`${city.lat}-${city.lon}`}
                onClick={() => handleAddCity(city)}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
              >
                {city.name}, {city.state ? `${city.state}, ` : ""}
                {city.country}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default CitySearch;
