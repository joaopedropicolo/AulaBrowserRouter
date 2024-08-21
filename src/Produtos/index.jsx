import React, { useState } from 'react';
import Header from '../componentes/Header'
import Footer from '../componentes/Footer';
import ListarProdutos from '../componentes/ListarProdutos';

export default function Produtos(){
    const [listaObjetos, setListaObjetos] = useState([
        {
            id: 1,
            nome: "Tênis Masculino Asics Gel-Thunderlight - Preto+Laranja",
            image: "https://static.netshoes.com.br/produtos/tenis-puma-skyrocket-lite-unissex/58/PI3-1812-058/PI3-1812-058_detalhe1.jpg",
            preco: 500
        },
        {
            id: 2,
            nome: "Tênis Masculino Asics Gel-Thunderlight - Preto+Laranja",
            image: "https://static.netshoes.com.br/produtos/tenis-puma-skyrocket-lite-unissex/58/PI3-1812-058/PI3-1812-058_detalhe1.jpg",
            preco: 500
        },
        {
            id: 3,
            nome: "Tênis Masculino Asics Gel-Thunderlight - Preto+Laranja",
            image: "https://static.netshoes.com.br/produtos/tenis-puma-skyrocket-lite-unissex/58/PI3-1812-058/PI3-1812-058_detalhe1.jpg",
            preco: 500
        },
        {
            id: 4,
            nome: "Tênis Masculino Asics Gel-Thunderlight - Preto+Laranja",
            image: "https://static.netshoes.com.br/produtos/tenis-puma-skyrocket-lite-unissex/58/PI3-1812-058/PI3-1812-058_detalhe1.jpg",
        },
        {
            id: 5,
            nome: "Tênis Masculino Asics Gel-Thunderlight - Preto+Laranja",
            image: "https://static.netshoes.com.br/produtos/tenis-puma-skyrocket-lite-unissex/58/PI3-1812-058/PI3-1812-058_detalhe1.jpg",
            preco: 500
        },
        {
            id: 6,
            nome: "Tênis Masculino Asics Gel-Thunderlight - Preto+Laranja",
            image: "https://static.netshoes.com.br/produtos/tenis-puma-skyrocket-lite-unissex/58/PI3-1812-058/PI3-1812-058_detalhe1.jpg",
            preco: 500
        },
        {
            id: 7,
            nome: "Tênis Masculino Asics Gel-Thunderlight - Preto+Laranja",
            image: "https://static.netshoes.com.br/produtos/tenis-puma-skyrocket-lite-unissex/58/PI3-1812-058/PI3-1812-058_detalhe1.jpg",
        },
        {
            id: 8,
            nome: "Tênis Masculino Asics Gel-Thunderlight - Preto+Laranja",
            image: "https://static.netshoes.com.br/produtos/tenis-puma-skyrocket-lite-unissex/58/PI3-1812-058/PI3-1812-058_detalhe1.jpg",
        },
        {
            id: 9,
            nome: "Tênis Masculino Asics Gel-Thunderlight - Preto+Laranja",
            image: "https://static.netshoes.com.br/produtos/tenis-puma-skyrocket-lite-unissex/58/PI3-1812-058/PI3-1812-058_detalhe1.jpg",
            preco: 500
        },
        {
            id: 10,
            nome: "Tênis Masculino Asics Gel-Thunderlight - Preto+Laranja",
            image: "https://static.netshoes.com.br/produtos/tenis-puma-skyrocket-lite-unissex/58/PI3-1812-058/PI3-1812-058_detalhe1.jpg",
            preco: 500
        },
        {
            id: 11,
            nome: "Tênis Masculino Asics Gel-Thunderlight - Preto+Laranja",
            image: "https://static.netshoes.com.br/produtos/tenis-puma-skyrocket-lite-unissex/58/PI3-1812-058/PI3-1812-058_detalhe1.jpg",
            preco: 500
        },
        {
            id: 12,
            nome: "Tênis Masculino Asics Gel-Thunderlight - Preto+Laranja",
            image: "https://static.netshoes.com.br/produtos/tenis-puma-skyrocket-lite-unissex/58/PI3-1812-058/PI3-1812-058_detalhe1.jpg",
            preco: 500
        },
        {
            id: 13,
            nome: "Tênis Masculino Asics Gel-Thunderlight - Preto+Laranja",
            image: "https://static.netshoes.com.br/produtos/tenis-puma-skyrocket-lite-unissex/58/PI3-1812-058/PI3-1812-058_detalhe1.jpg",
        },
        {
            id: 14,
            nome: "Tênis Masculino Asics Gel-Thunderlight - Preto+Laranja",
            image: "https://static.netshoes.com.br/produtos/tenis-puma-skyrocket-lite-unissex/58/PI3-1812-058/PI3-1812-058_detalhe1.jpg",
        },
        {
            id: 15,
            nome: "Tênis Masculino Asics Gel-Thunderlight - Preto+Laranja",
            image: "https://static.netshoes.com.br/produtos/tenis-puma-skyrocket-lite-unissex/58/PI3-1812-058/PI3-1812-058_detalhe1.jpg",
            preco: 500
        }
    ]);
    return(
        <>
        <Header />
        <div id='center-lista-produtos'>
            <h1 id='title-produtos'>Produtos</h1>
            <ListarProdutos listaObjetos={listaObjetos} />
        </div>
        <Footer Creditos={"João Pedro Fernandes Picolo"} />
        </>
    )
}