"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const clearLocalStorage = () => {
    if (confirm("Tem certeza que deseja remover todos os dados?")) {
      localStorage.clear();
      alert("Todos os dados foram removidos com sucesso!");
    }
  };

  return (
    <div className="home-container">
      <div className="home-content">
        <Image src="/icons/carbono_calc_icon-192.png" alt="App logo" width={200} height={200} className="home-logo" />
        <h1 className="home-title">Bem-vindo</h1>
        <div className="home-buttons">
          <Link href="/track">
            <button className="home-button">
              Mapa de Pegada de Carbono
            </button>
          </Link>
          <Link href="/calculators">
            <button className="home-button">
              Cálculos Manuais
            </button>
          </Link>
          <Link href="/dashboard">
            <button className="home-button">
              Dashboard
            </button>
          </Link>
          <button className="home-button" onClick={clearLocalStorage}>
            Remover Todos os Dados
          </button>
        </div>
      </div>
    </div>
  );
}
