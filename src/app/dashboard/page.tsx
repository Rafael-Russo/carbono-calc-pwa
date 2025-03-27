"use client";
import dynamic from "next/dynamic";
import DashboardDateFilter from "./DashboardDateFilter";

// Importação dinâmica do gráfico com SSR desabilitado
const PieChartWrapper = dynamic(
  () => import("./PieChartWrapper"),
  { ssr: false }
);

const data = [
  { name: "Energia", value: 200 },
  { name: "GLP", value: 150 },
  { name: "Gás Natural", value: 100 },
  { name: "Transporte Terrestre", value: 250 },
  { name: "Transporte Aéreo", value: 50 },
  { name: "Rastreio", value: 300 },
];

export default function DashboardPage() {
  const total = data.reduce((sum, entry) => sum + entry.value, 0);
  return (
    <div className="min-h-screen bg-white p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-[var(--green)] text-center mb-6">Dashboard</h2>

      {/* PieChart em linha separada */}
      <div className="relative flex items-center justify-center mb-8">
        <PieChartWrapper />
        {/* Total centralizado */}
        <div className="absolute">
          <div className="bg-white rounded-full p-2">
            <span className="text-xl font-bold text-[var(--green)]">{total} kg CO₂</span>
          </div>
        </div>
      </div>

      {/* Card de Filtro com estilo de card */}
      <div className="mb-8 max-w-sm mx-auto p-4 border border-[var(--green)] rounded shadow">
        <DashboardDateFilter />
      </div>

      {/* Cards de Métricas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="border border-[var(--green)] p-4 rounded">
          <h3 className="text-lg font-semibold text-[var(--green)]">Km Andados</h3>
          <p className="text-[var(--green)]">-- km</p>
        </div>
        <div className="border border-[var(--green)] p-4 rounded">
          <h3 className="text-lg font-semibold text-[var(--green)]">Gás Consumido</h3>
          <p className="text-[var(--green)]">-- kg</p>
        </div>
      </div>
    </div>
  );
}