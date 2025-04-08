"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { getDynamicData } from "../../utils/dataStorage";
import DashboardDateFilter from "./DashboardDateFilter";
import Navigation from "../components/Navigation";

const metricTitles = {
  "Energia": "Energia Consumida",
  "GLP": "Gás Consumido",
  "Gás Natural": "Gás Natural Consumido",
  "Transporte Terrestre": "Km Andados",
  "Transporte Aéreo": "Transporte Aéreo",
  "Rastreio": "Rastreio de Carbono",
};

// Importação dinâmica do gráfico com SSR desabilitado
const PieChartWrapper = dynamic(
  () => import("./PieChartWrapper"),
  { ssr: false }
);

export default function DashboardPage() {
  const [data, setData] = useState([]);

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

  const getMetricUnit = (name: string) => {
    switch (name) {
      case "Transporte Terrestre":
        return "km";
      case "GLP":
        return "kg";
      case "Energia":
        return "kWh";
      default:
        return "";
    }
  };

  const total = parseFloat(data.reduce((sum, entry) => sum + entry.value, 0).toFixed(2));

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
        </div>

        {/* Card de Filtro com estilo de card */}
        <div className="card-filter">
          <DashboardDateFilter />
        </div>

        {/* Cards de Métricas */}
        <div className="metrics-grid">
          {data.map((metric) => (
            <div key={metric.name} className="card">
              <h3 className="text-lg font-semibold text-[var(--green)]">{metricTitles[metric.name]}</h3>
              <p className="text-[var(--green)]">
                {metric.value.toFixed(2)} {getMetricUnit(metric.name)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}