import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const HourlyChart = ({ data }) => {
  // OpenWeather gives 3-hour interval data
  // 8 entries ≈ next 24 hours
  const chartData = data.slice(0, 8).map((item) => ({
    // Extract HH:MM from timestamp
    // Example: "2026-02-01 15:00:00" → "15:00"
    time: item.dt_txt.split(" ")[1].slice(0, 5),
    temp: Math.round(item.main.temp),
  }));

  return (
    <div className="h-64 mb-8">
      <h3 className="font-medium mb-2">Next 24 Hours</h3>

      {/* Responsive chart container */}
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />

          {/* Temperature trend line */}
          <Line dataKey="temp" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HourlyChart;
