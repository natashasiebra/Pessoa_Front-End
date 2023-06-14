'use client'
import { useState } from 'react'
import styles from '../page.module.css'
import { useRouter } from 'next/navigation'

export default function Cadastro() {
    const route = useRouter();
    const [nome, setNome] = useState();
    const [jogo, setJogo] = useState();
    const [data, setData] = useState();

    const cadastrar = (e) => {
        e.preventDefault()
        
        const produto = {
            nome: nome,
            jogo: jogo,
            data: data
        }
        const produtoJson = JSON.stringify(produto);
        fetch("http://localhost:3000/produtos", {
            method: "POST",
            headers: { "content-Type": "application/json" },
            body: produtoJson
        }).then(function(){ route.push("/")}).catch(()=> console.log("Não foi possível cadastrar!"))
    }

    return (
        <div className={styles.main}>
            <form  onSubmit={cadastrar}>
                <input
                    type="text"
                    placeholder='Digite seu Nome:'
                    nome="Nome"
                    onChange={e => setNome(e.target.value)}
                /><br/>
                <input
                    type="text"
                    placeholder='Nome do Jogo:'
                    nome="Jogo"
                    onChange={e => setJogo(e.target.value)}
                /><br/>
                <input
                    type="text"
                    placeholder='Data de publicação:'
                    nome="Data"
                    onChange={e => setData(e.target.value)}
                /><br/>
                <button type='submit'>Cadastrar</button>
                <div>
                    <a href='/'>Voltar</a>
                </div>
            </form>
        </div>
    );
}