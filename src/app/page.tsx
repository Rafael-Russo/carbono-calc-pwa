// import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="text-center p-4">
        <h1 className="text-4xl font-bold text-[var(--green)] mb-8">Bem-vindo</h1>
        <div className="flex flex-col gap-4">
          <Link href="/track">
            <button className="py-2 px-4 border border-[var(--green)] text-[var(--green)] rounded hover:bg-[var(--green)] hover:text-white transition">
              Função 1
            </button>
          </Link>
          <Link href="/calculators">
            <button className="py-2 px-4 border border-[var(--green)] text-[var(--green)] rounded hover:bg-[var(--green)] hover:text-white transition">
              Função 2
            </button>
          </Link>
          <Link href="/dashboard">
            <button className="py-2 px-4 border border-[var(--green)] text-[var(--green)] rounded hover:bg-[var(--green)] hover:text-white transition">
              Função 3
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
