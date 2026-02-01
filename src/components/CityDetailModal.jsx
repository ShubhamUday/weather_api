import { useDispatch, useSelector } from "react-redux";
import { closeCityDetail } from "../features/ui/uiSlice";
import HourlyChart from "./HourlyChart";
import DailyChart from "./DailyChart";

const CityDetailModal = () => {
  const dispatch = useDispatch();

  const { isDetailOpen, activeCityId } = useSelector((state) => state.ui);
  const cities = useSelector((state) => state.cities.list);

  // Forecast cache + loading/error from weather slice
  const { forecast, loading, error } = useSelector((state) => state.weather);

  if (!isDetailOpen) return null;

  // Find active city details using selected city ID
  const city = cities.find((c) => c.id === activeCityId);

  // Get forecast data for this specific city
  const data = forecast[activeCityId];

  return (
    // Overlay backdrop
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      {/* Modal container */}
      <div className="bg-white rounded-xl w-full max-w-4xl p-6 relative">
        <button
          onClick={() => dispatch(closeCityDetail())}
          className="absolute right-4 top-4 text-gray-500 cursor-pointer"
        >
          ✕
        </button>

        <h2 className="text-xl font-semibold mb-4">
          {city.name}, {city.country}
        </h2>

        {loading && <p>Loading forecast...</p>}

        {error && <p className="text-red-500">{error}</p>}

        {/* Charts render only when forecast exists */}
        {data && (
          <>
            <HourlyChart data={data.list} />
            <DailyChart data={data.list} />
          </>
        )}
      </div>
    </div>
  );
};

export default CityDetailModal;
