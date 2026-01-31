import { useSelector } from "react-redux";
import CityCard from "./CityCard";
import LoadingCard from "./LoadingCard";

const CityGrid = () => {
  const cities = useSelector((state) => state.cities.list);
  const { current, loading, error } = useSelector((state) => state.weather);

  return (
    <>
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cities.map((city) =>
          loading && !current[city.id] ? (
            <LoadingCard key={city.id} />
          ) : (
            <CityCard
              key={city.id}
              city={city}
              weather={current[city.id]?.data}
            />
          ),
        )}
      </div>
    </>
  );
};

export default CityGrid;
