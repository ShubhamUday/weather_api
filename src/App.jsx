import { useSelector } from "react-redux";
import { useEffect } from "react";

import DashboardPage from "./pages/DashboardPage";

const App = () => {
  const cities = useSelector((state) => state.cities.list);
  const favorites = useSelector((state) => state.cities.favorites);
  const unit = useSelector((state) => state.ui.unit);

  useEffect(() => {
    const favoriteCities = cities.filter((city) => favorites.includes(city.id));
    localStorage.setItem("favoriteCities", JSON.stringify(favoriteCities));
  }, [cities, favorites]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem("unit", unit);
  }, [unit]);

  return (
    <>
      <DashboardPage />
    </>
  );
};

export default App;
