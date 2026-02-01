import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const DailyChart = ({ data }) => {
  // Map to store one forecast entry per day
  const dailyMap = {};

  // Loop through 3-hour forecast list
  data.forEach((item) => {
    const day = item.dt_txt.split(" ")[0];
    if (!dailyMap[day]) {
      dailyMap[day] = item;
    }
  });

  // Convert grouped data into chart-friendly format
  const chartData = Object.values(dailyMap).map((item) => ({
    // Convert date to weekday label (Mon, Tue, etc.)
    day: new Date(item.dt_txt).toLocaleDateString("en-US", {
      weekday: "short",
    }),
    temp: Math.round(item.main.temp),
  }));

  return (
    <div className="h-64">
      <h3 className="font-medium mb-2">5 Day Forecast</h3>

      {/* Recharts container auto-resizes */}
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="temp" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DailyChart;
