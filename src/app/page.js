"use client"
import Link from 'next/link';
import './globals.css'

export default async function Home() {

  const req = await fetch("http://localhost:3000/produtos", {
    cache: "no-cache"
  });
  const produtos = await req.json();

  return (
    <main> <Link  href="/cadastro" className='voltar'> CADASTRAR </Link>

      {produtos.map(produtos => (
        <div key={produtos.id}>
            <p>{produtos.titulo}</p>
            <p>{produtos.data_cadastro}</p>
            <p>{produtos.preco}</p>
            <p>{produtos.descricao}</p>
            <p>{produtos.imagem}</p>
          <img src={produtos.imagem} width='15%'/>
          <Link className='link' href={`/produto/${produtos.id}`}>Ver mais</Link>

        </div>
      ))}
    </main>
  )
}