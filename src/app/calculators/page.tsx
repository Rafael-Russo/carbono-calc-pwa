export default function CalculatorsPage() {
  return (
    <div className="min-h-screen bg-white p-4 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold text-[var(--green)] mb-6 text-center">
        Calculadoras Manuais de Pegada de Carbono
      </h2>
      <div className="flex flex-col gap-4">
        {/* Card 1: ENERGIA ELÉTRICA DA REDE - KWh por mês */}
        <div className="flex flex-col bg-[var(--green)] text-white rounded-lg p-4">
          <div className="font-semibold mb-2">
            ENERGIA ELÉTRICA DA REDE
          </div>
          <form className="flex flex-col gap-2">
            <input
              type="number"
              placeholder="KWh por mês"
              className="w-full p-2 border border-white rounded bg-white text-[var(--green)]"
            />
            <button
              type="submit"
              className="py-2 px-4 bg-white text-[var(--green)] rounded hover:bg-[var(--green)] hover:text-white transition"
            >
              Calcular
            </button>
          </form>
        </div>

        {/* Card 2: GLP (BOTIJÃO) - Kg por mês */}
        <div className="flex flex-col bg-[var(--green)] text-white rounded-lg p-4">
          <div className="font-semibold mb-2">
            GLP (BOTIJÃO)
          </div>
          <form className="flex flex-col gap-2">
            <input
              type="number"
              placeholder="Kg por mês"
              className="w-full p-2 border border-white rounded bg-white text-[var(--green)]"
            />
            <button
              type="submit"
              className="py-2 px-4 bg-white text-[var(--green)] rounded hover:bg-[var(--green)] hover:text-white transition"
            >
              Calcular
            </button>
          </form>
        </div>

        {/* Card 3: GÁS NATURAL (ENCANAMENTO) - Metros por mês */}
        <div className="flex flex-col bg-[var(--green)] text-white rounded-lg p-4">
          <div className="font-semibold mb-2">
            GÁS NATURAL (ENCANAMENTO)
          </div>
          <form className="flex flex-col gap-2">
            <input
              type="number"
              placeholder="Metros por mês"
              className="w-full p-2 border border-white rounded bg-white text-[var(--green)]"
            />
            <button
              type="submit"
              className="py-2 px-4 bg-white text-[var(--green)] rounded hover:bg-[var(--green)] hover:text-white transition"
            >
              Calcular
            </button>
          </form>
        </div>

        {/* Card 4: TRANSPORTE TERRESTRE - Km por mês */}
        <div className="flex flex-col bg-[var(--green)] text-white rounded-lg p-4">
          <div className="font-semibold mb-2">
            TRANSPORTE TERRESTRE
          </div>
          <form className="flex flex-col gap-2">
            <input
              type="number"
              placeholder="Km por mês"
              className="w-full p-2 border border-white rounded bg-white text-[var(--green)]"
            />
            <button
              type="submit"
              className="py-2 px-4 bg-white text-[var(--green)] rounded hover:bg-[var(--green)] hover:text-white transition"
            >
              Calcular
            </button>
          </form>
        </div>

        {/* Card 5: TRANSPORTE AÉREO - Viagens por ano */}
        <div className="flex flex-col bg-[var(--green)] text-white rounded-lg p-4">
          <div className="font-semibold mb-2">
            TRANSPORTE AÉREO
          </div>
          <form className="flex flex-col gap-2">
            <input
              type="number"
              placeholder="Viagens por ano"
              className="w-full p-2 border border-white rounded bg-white text-[var(--green)]"
            />
            <button
              type="submit"
              className="py-2 px-4 bg-white text-[var(--green)] rounded hover:bg-[var(--green)] hover:text-white transition"
            >
              Calcular
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
