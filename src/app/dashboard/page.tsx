"use client";
import dynamic from "next/dynamic";
import DashboardDateFilter from "./DashboardDateFilter";
import Navigation from "../components/Navigation";

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
    <>
      {/* Navigation ocupando toda a largura */}
      <div className="w-full">
        <Navigation />
      </div>
      <div className="page-container max-w-4xl mx-auto">
        <h2 className="page-title">Dashboard</h2>

        {/* PieChart em linha separada */}
        <div className="chart-container">
          <PieChartWrapper />
          {/* Total centralizado */}
          <div className="chart-total">
            <div className="bg-white rounded-full p-2">
              <span className="text-xl font-bold text-[var(--green)]">{total} kg CO₂</span>
            </div>
          </div>
        </div>

        {/* Card de Filtro com estilo de card */}
        <div className="card-filter">
          <DashboardDateFilter />
        </div>

        {/* Cards de Métricas */}
        <div className="metrics-grid">
          <div className="card">
            <h3 className="text-lg font-semibold text-[var(--green)]">Km Andados</h3>
            <p className="text-[var(--green)]">-- km</p>
          </div>
          <div className="card">
            <h3 className="text-lg font-semibold text-[var(--green)]">Gás Consumido</h3>
            <p className="text-[var(--green)]">-- kg</p>
          </div>
        </div>
      </div>
    </>
  );
}