"use client";
import React from "react";
import Navigation from "../components/Navigation";
import CalculatorCard from "../components/CalculatorCard";
import { 
  calculateElectricityCarbon, 
  calculateGasLpCarbon, 
  calculateNaturalGasCarbon, 
  calculateLandTransportCarbon, 
  calculateAirTransportCarbon 
} from "../../utils/carbonFootprint";

export default function CalculatorsPage() {
  return (
    <>
      <div className="w-full">
        <Navigation />
      </div>
      <div className="page-container max-w-xl mx-auto">
        <h2 className="page-title">Calculadoras Manuais de Pegada de Carbono</h2>
        <div className="flex flex-col gap-4">
          <CalculatorCard 
            title="ENERGIA ELÉTRICA DA REDE" 
            placeholder="KWh por mês" 
            calculate={calculateElectricityCarbon} 
            storageKey="electricity"
          />
          <CalculatorCard 
            title="GLP (BOTIJÃO)" 
            placeholder="Kg por mês" 
            calculate={calculateGasLpCarbon} 
            storageKey="gasLp"
          />
          <CalculatorCard 
            title="GÁS NATURAL (ENCANAMENTO)" 
            placeholder="m³ por mês" 
            calculate={calculateNaturalGasCarbon} 
            storageKey="naturalGas"
          />
          <CalculatorCard 
            title="TRANSPORTE TERRESTRE" 
            placeholder="Km por mês" 
            calculate={calculateLandTransportCarbon} 
            storageKey="landTransport"
          />
          <CalculatorCard 
            title="TRANSPORTE AÉREO" 
            placeholder="Viagens por ano" 
            calculate={calculateAirTransportCarbon} 
            storageKey="airTransport"
          />
        </div>
      </div>
    </>
  );
}
