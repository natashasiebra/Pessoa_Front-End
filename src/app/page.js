"use client"
import Link from 'next/link';

export default async function Home() {

  const req = await fetch("http://localhost:3000/produtos", {
    cache: "no-cache"
  });
  const produtos = await req.json();

  return (
    <main> <Link href="/cadastro" className='voltar'> CADASTRAR </Link>

      {produtos.map(produtos => (
        <div key={produtos.id}>
          <p>{produtos.nome}</p>
          <p>{produtos.jogo}</p>
          <p>{produtos.data}</p>
          <Link href={`/produto/${produtos.id}`}>Jogos</Link>
          
        </div>
      ))}
    </main>
  )
}