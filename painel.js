import { useSession, signIn, signOut } from "next-auth/react"
export default function Painel() {
  const { data: session } = useSession()
  if (!session) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl mb-4">Você não está logado</h2>
        <button onClick={() => signIn("discord")} className="bg-blue-500 text-white px-4 py-2 rounded">Login com Discord</button>
      </div>
    );
  }
  return (
    <div className="p-6">
      <h2 className="text-xl mb-4">Bem-vindo, {session.user.name}!</h2>
      <button onClick={() => signOut()} className="bg-red-500 text-white px-4 py-2 rounded">Sair</button>
    </div>
  );
}