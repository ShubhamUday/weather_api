import { useSelector } from "react-redux";
import CityCard from "./CityCard";

const CityGrid = () => {
  const cities = useSelector((state) => state.cities.list);
  const { current } = useSelector((state) => state.weather);

  console.log(cities);

  return (
    <>
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cities.map((city) => (
          <CityCard key={city.id} city={city} weather={current[city.id]} />
        ))}
      </div>
    </>
  );
};

export default CityGrid;
