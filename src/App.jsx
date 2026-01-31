import { useSelector } from "react-redux";
import { useEffect } from "react";

import DashboardPage from "./pages/DashboardPage";

const App = () => {
  const favorites = useSelector((state) => state.cities.favorites);
  const unit = useSelector((state) => state.ui.unit);

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
