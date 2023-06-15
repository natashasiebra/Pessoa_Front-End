'use client'

import { useRouter } from "next/navigation";

export default async function Produtos({ params }) {
    const router = useRouter();
    const id = { id: parseInt(params.id) }

    const idJson = JSON.stringify(id);

    const req = await fetch("http://localhost:3000/produtos", {
        method: "POST",
        cache: "no-cache",
        headers: { 'content-type': 'application/json' },
        body: idJson
    })
    const produtos = await req.json();


    const remover = () => {
        console.log(idJson)
        try {
            fetch("http://localhost:3000/produtos", {
                method: "DELETE",
                headers: { 'content-type': 'application/json' },
                body: idJson
            })
            router.push("/");
        } catch (error) {
            alert("Ocorreu um erro" + error)
        }
    }
    return (
        <div>
            <p>{produtos.titulo}</p>
            <p>{produtos.data_cadastro}</p>
            <p>{produtos.preco}</p>
            <p>{produtos.descricao}</p>
            <p>{produtos.imagem}</p>
            <button onClick={e => e.preventDefault(remover())}>REMOVER</button>

        </div>

    )
}