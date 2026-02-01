import { useDispatch, useSelector } from "react-redux";
import { toggleUnit } from "../features/ui/uiSlice";

const Header = () => {
  const dispatch = useDispatch();

  // Read temperature unit from UI slice
  // ("metric" = Celsius, "imperial" = Fahrenheit)
  const unit = useSelector((state) => state.ui.unit);

  return (
    <>
      {/* Top navigation/header bar */}
      <header className="flex items-center justify-between px-6 py-4 border-b">
        <h1 className="text-xl font-semibold">Weather Dashboard</h1>

        {/* Unit toggle button */}
        <button
          onClick={() => dispatch(toggleUnit())}
          className="px-3 py-1 rounded bg-gray-900 text-white text-sm cursor-pointer"
        >
          {unit === "metric" ? "°C" : "°F"}
        </button>
      </header>
    </>
  );
};

export default Header;
