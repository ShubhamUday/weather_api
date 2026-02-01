import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect, useRef } from "react";
import { fetchCitySuggestions } from "../features/cities/citiesThunk";
import { addCity } from "../features/cities/citiesSlice";

const CitySearch = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  // Controls dropdown visibility
  const [isOpen, setIsOpen] = useState(false);

  // Search slice state from Redux
  const { results, loading, error } = useSelector(
    (state) => state.cities.search,
  );

  const existingCities = useSelector((state) => state.cities.list);

  // Effect runs whenever query changes
  useEffect(() => {
    // If query too short → close dropdown and stop
    if (query.trim().length < 2) {
      setIsOpen(false);
      return;
    }
    dispatch(fetchCitySuggestions(query));
    setIsOpen(true);
  }, [query, dispatch]);

  // Add selected city to dashboard
  const handleAddCity = (city) => {
    const exists = existingCities.some(
      (c) => c.lat === city.lat && c.lon === city.lon,
    );
    if (exists) return;

    // Normalize city structure before saving to Redux
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
    setIsOpen(false);
  };

  return (
    <>
      <div className="relative max-w-md mx-auto mt-6">
        {/* Search input */}
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          // Reopen dropdown if user focuses input again
          onFocus={() => {
            if (query.trim().length >= 2) setIsOpen(true);
          }}
          placeholder="Search city..."
          className="w-full px-4 py-2 border rounded"
        />

        {isOpen && loading && (
          <div className="absolute w-full bg-white border mt-1 p-2 text-sm">
            Searching...
          </div>
        )}

        {isOpen && error && (
          <div className="absolute w-full bg-white border mt-1 p-2 text-sm text-red-500">
            {error}
          </div>
        )}

        {/* Results dropdown */}
        {isOpen && results.length > 0 && !loading && (
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
