import { useDispatch, useSelector } from "react-redux";
import CityGrid from "../components/CityGrid";
import Header from "../components/Header";
import { useEffect } from "react";
import { fetchCurrentWeather } from "../features/weather/weatherThunk";
import CitySearch from "../components/CitySearch";

const DashboardPage = () => {
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.cities.list);
  const unit = useSelector((state) => state.ui.unit);

  useEffect(() => {
    cities.forEach((city) =>
      dispatch(fetchCurrentWeather({ city, units: unit })),
    );
  }, [dispatch, cities, unit]);

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <CitySearch />
        <CityGrid />
      </div>
    </>
  );
};

export default DashboardPage;
