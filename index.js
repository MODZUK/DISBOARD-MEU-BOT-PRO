import Link from "next/link"
export default function Home() {
  return (
    <main className="p-6 text-center">
      <h1 className="text-4xl font-bold">Bem-vindo ao Dashboard do Seu Bot 🤖</h1>
      <p className="mt-4 text-lg">Gerencie seu bot, veja comandos e status VIP</p>
      <div className="mt-6 space-x-4">
        <Link href="/comandos" className="px-4 py-2 bg-blue-500 text-white rounded">Ver Comandos</Link>
        <Link href="/painel" className="px-4 py-2 bg-green-500 text-white rounded">Painel do Usuário</Link>
      </div>
    </main>
  );
}