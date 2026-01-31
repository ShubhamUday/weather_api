import { useDispatch, useSelector } from "react-redux";
import { toggleUnit } from "../features/ui/uiSlice";

const Header = () => {
  const dispatch = useDispatch();
  const unit = useSelector((state) => state.ui.unit);

  return (
    <>
      <header className="flex items-center justify-between px-6 py-4 border-b">
        <h1 className="text-xl font-semibold">Weather Dashboard</h1>
        <button
          onClick={() => dispatch(toggleUnit())}
          className="px-3 py-1 rounded bg-gray-900 text-white text-sm"
        >
          {unit === "metric" ? "°C" : "°F"}
        </button>
      </header>
    </>
  );
};

export default Header;
