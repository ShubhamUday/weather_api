import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const HourlyChart = ({ data }) => {
  const chartData = data.slice(0, 8).map((item) => ({
    time: item.dt_txt.split(" ")[1].slice(0, 5),
    temp: Math.round(item.main.temp),
  }));

  return (
    <div className="h-64 mb-8">
      <h3 className="font-medium mb-2">Next 24 Hours</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Line dataKey="temp" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HourlyChart;
