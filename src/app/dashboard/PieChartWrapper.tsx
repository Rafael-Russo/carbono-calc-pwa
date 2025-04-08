import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { useEffect, useState } from "react";
import { getDynamicData } from "../../utils/dataStorage";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28DFF", "#FF6666"];

export default function PieChartWrapper() {
  const [data, setData] = useState([
    { name: "Energia", value: 0 },
    { name: "GLP", value: 0 },
    { name: "Gás Natural", value: 0 },
    { name: "Transporte Terrestre", value: 0 },
    { name: "Transporte Aéreo", value: 0 },
    { name: "Rastreio", value: 0 },
  ]);

  useEffect(() => {
    const fetchData = () => {
      const dynamicData = getDynamicData();
      setData(dynamicData);
    };

    fetchData();

    // Adiciona um listener para atualizar os dados quando o localStorage mudar
    window.addEventListener("storage", fetchData);

    return () => {
      window.removeEventListener("storage", fetchData);
    };
  }, []);

  const total = data.reduce((sum, entry) => sum + entry.value, 0).toFixed(2);

  return (
    <div style={{ position: 'relative', width: 300, height: 300 }}>
      <PieChart width={300} height={300} style={{ zIndex: 1 }}>
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
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
        className="text-xl font-bold text-[var(--green)]"
      >
        {total} kg CO₂
      </div>
    </div>
  );
}
