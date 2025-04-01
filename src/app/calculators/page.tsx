"use client";
import Navigation from "../components/Navigation";

export default function CalculatorsPage() {
  return (
    <>
      <div className="w-full">
        <Navigation />
      </div>
      <div className="page-container max-w-xl mx-auto">
        <h2 className="page-title">Calculadoras Manuais de Pegada de Carbono</h2>
        <div className="flex flex-col gap-4">
          {/* Card 1 */}
          <div className="card flex flex-col bg-[var(--green)] text-white rounded-lg p-4">
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
                className="btn-green"
              >
                Calcular
              </button>
            </form>
          </div>
          {/* Card 2 */}
          <div className="card flex flex-col bg-[var(--green)] text-white rounded-lg p-4">
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
                className="btn-green"
              >
                Calcular
              </button>
            </form>
          </div>
          {/* Card 3 */}
          <div className="card flex flex-col bg-[var(--green)] text-white rounded-lg p-4">
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
                className="btn-green"
              >
                Calcular
              </button>
            </form>
          </div>
          {/* Card 4 */}
          <div className="card flex flex-col bg-[var(--green)] text-white rounded-lg p-4">
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
                className="btn-green"
              >
                Calcular
              </button>
            </form>
          </div>
          {/* Card 5 */}
          <div className="card flex flex-col bg-[var(--green)] text-white rounded-lg p-4">
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
                className="btn-green"
              >
                Calcular
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
