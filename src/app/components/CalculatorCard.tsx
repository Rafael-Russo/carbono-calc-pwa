import React, { useState, FormEvent } from "react";
import { saveData, deleteData } from "../../utils/dataStorage";

interface CalculatorCardProps {
  title: string;
  placeholder: string;
  calculate: (value: number) => number;
  storageKey: string;
  unit?: string;
}

export default function CalculatorCard({ title, placeholder, calculate, storageKey, unit = "kg CO2e" }: CalculatorCardProps) {
  const [result, setResult] = useState<number | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    deleteData(storageKey);
    const input = e.currentTarget.querySelector("input");
    const value = Number(input?.value);
    const calcResult = calculate(value);
    setResult(calcResult);
    const resultStr = calcResult.toFixed(2);
    saveData(storageKey, resultStr);
  };

  const handleReset = () => {
    setResult(null);
    deleteData(storageKey);
  };

  return (
    <div className="card flex flex-col bg-[var(--green)] text-white rounded-lg p-4">
      <div className="font-semibold mb-2">{title}</div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          type="number"
          placeholder={placeholder}
          className="w-full p-2 border border-white rounded bg-white text-[var(--green)]"
        />
        <button type="submit" className="btn-green">Calcular</button>
      </form>
      {result !== null && (
        <div className="flex items-center mt-4">
          <p className="text-2xl font-bold text-white">
            Resultado: {result.toFixed(2)} {unit}
          </p>
          <button
            type="button"
            onClick={handleReset}
            className="btn bg-yellow-500 text-white ml-auto" // Botão modificado para preenchido e alinhado à direita
          >
            Refazer cálculo
          </button>
        </div>
      )}
    </div>
  );
}