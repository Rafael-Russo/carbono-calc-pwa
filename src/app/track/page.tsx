export default function TrackPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-4">
      {/* Cabeçalho */}
      <h2 className="text-2xl font-bold text-[var(--green)] my-4">
        Rastreamento de Percurso
      </h2>
      
      {/* Placeholder para o mapa */}
      <div className="w-full max-w-4xl bg-gray-100 border border-[var(--green)] rounded-lg overflow-hidden">
        <div className="w-full h-64 flex items-center justify-center text-[var(--green)]">
          Mapa Aqui
        </div>
      </div>
      
      {/* Seção de métricas */}
      <div className="mt-8 w-full max-w-4xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[var(--green)]">
          <div className="border border-[var(--green)] p-4 rounded">
            <h3 className="font-semibold">Transporte</h3>
            <p>Veículo definido: --</p>
          </div>
          <div className="border border-[var(--green)] p-4 rounded">
            <h3 className="font-semibold">Distância</h3>
            <p>-- km</p>
          </div>
          <div className="border border-[var(--green)] p-4 rounded">
            <h3 className="font-semibold">Tempo</h3>
            <p>-- min</p>
          </div>
          <div className="border border-[var(--green)] p-4 rounded">
            <h3 className="font-semibold">Pegada de Carbono</h3>
            <p>-- kg CO₂</p>
          </div>
        </div>
      </div>
    </div>
  );
}
