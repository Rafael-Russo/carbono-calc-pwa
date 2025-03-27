import { PieChart, Pie, Cell, Tooltip } from "recharts";

const data = [
  { name: "Energia", value: 200 },
  { name: "GLP", value: 150 },
  { name: "Gás Natural", value: 100 },
  { name: "Transporte Terrestre", value: 250 },
  { name: "Transporte Aéreo", value: 50 },
  { name: "Rastreio", value: 300 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28DFF", "#FF6666"];

export default function PieChartWrapper() {
  return (
    <PieChart width={300} height={300}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        innerRadius={70}
        outerRadius={100}
        dataKey="value"
        startAngle={90}
        endAngle={-270}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
}
