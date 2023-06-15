'use client'
import { useState } from 'react'
import styles from '../page.module.css'
import { useRouter } from 'next/navigation'
import '../globals.css'

export default function Cadastro() {
    const route = useRouter();
    const [titulo, setTitulo] = useState();
    const [data_cadastro, setData_cadastro] = useState();
    const [preco, setPreco] = useState();
    const [descricao, setDescricao] = useState();
    const [imagem, setImagem] = useState();

    const cadastrar = (e) => {
        e.preventDefault()
        
        const produto = {
            titulo:titulo,
            data_cadastro:data_cadastro,
            preco:preco,
            descricao:descricao,
            imagem:imagem
        }
        
        const produtoJson = JSON.stringify(produto);
        fetch("http://localhost:3000/produto", {
            method: "POST",
            headers: { "content-Type": "application/json" },
            body: produtoJson
        }).then(function(){ route.push("/")}).catch(()=> console.log("Não foi possível cadastrar!"))
    }

    return (
        <div className={styles.main}>
            <form  onSubmit={cadastrar}>
                <input className='input'
                    type="text"
                    placeholder='Digite O Titulo:'
                    nome="Tituo"
                    onChange={e => setTitulo(e.target.value)}
                /><br/>
                <input className='input'
                    type="text"
                    placeholder='Data De Cadastro:'
                    nome="Data Cadastro"
                    onChange={e => setData_cadastro(e.target.value)}
                /><br/>
                <input className='input'
                    type="text"
                    placeholder='Digite O Preço:'
                    nome="Preço"
                    onChange={e => setPreco(e.target.value)}
                /><br/>
                <input className='input'
                    type="text"
                    placeholder='Digite A Descrição:'
                    nome="Descrição"
                    onChange={e => setDescricao(e.target.value)}
                /><br/>
                <input className='input'
                    type="text"
                    placeholder='Link Da Imagem:'
                    nome="Imagem"
                    onChange={e => setImagem(e.target.value)}
                /><br/>
                <button className='botao' type='submit'>Cadastrar</button>
                <div>
                    <a href='/'>Voltar</a>
                </div>
            </form>
        </div>
    );
}