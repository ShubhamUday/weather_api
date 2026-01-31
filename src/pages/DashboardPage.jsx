import { useDispatch, useSelector } from "react-redux";
import CityGrid from "../components/CityGrid";
import Header from "../components/Header";
import { useEffect } from "react";
import {
  fetchCurrentWeather,
  fetchForecast,
} from "../features/weather/weatherThunk";
import CitySearch from "../components/CitySearch";
import CityDetailModal from "../components/CityDetailModal";

const DashboardPage = () => {
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.cities.list);
  const unit = useSelector((state) => state.ui.unit);

  const activeCityId = useSelector((state) => state.ui.activeCityId);

  useEffect(() => {
    cities.forEach((city) =>
      dispatch(fetchCurrentWeather({ city, units: unit })),
    );
  }, [dispatch, cities, unit]);

  useEffect(() => {
    if (!activeCityId) return;

    const city = cities.find((c) => c.id === activeCityId);
    dispatch(fetchForecast({ city, units: unit }));
  }, [activeCityId, unit, dispatch, cities]);

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <CitySearch />
        <CityGrid />
        <CityDetailModal />
      </div>
    </>
  );
};

export default DashboardPage;
