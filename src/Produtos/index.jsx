import React, { useState } from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer';
import ListarProdutos from '../components/ListarProdutos';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Produtos(){
    const [listaObjetos, setListaObjetos] = useState([
        {
            id: 1,
            nome: "Tênis Masculino Asics Gel-Thunderlight - Preto+Laranja",
            image: "https://static.netshoes.com.br/produtos/tenis-puma-skyrocket-lite-unissex/58/PI3-1812-058/PI3-1812-058_detalhe1.jpg",
            tipo: 'Masculino',
            categoria: ['Masculino, Tênis'],
            desconto: true,
            preco: 500
        },
        {
            id: 2,
            nome: "Tênis Masculino Asics Gel-Thunderlight - Preto+Laranja",
            image: "https://static.netshoes.com.br/produtos/tenis-puma-skyrocket-lite-unissex/58/PI3-1812-058/PI3-1812-058_detalhe1.jpg",
            tipo: 'Masculino',
            categoria: ['Masculino, Tênis'],
            desconto: true,
            preco: 500
        },
        {
            id: 3,
            nome: "Tênis Masculino Asics Gel-Thunderlight - Preto+Laranja",
            image: "https://static.netshoes.com.br/produtos/tenis-puma-skyrocket-lite-unissex/58/PI3-1812-058/PI3-1812-058_detalhe1.jpg",
            tipo: 'Masculino',
            categoria: ['Masculino, Tênis'],
            desconto: true,
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
            tipo: 'Masculino',
            categoria: ['Masculino, Tênis'],
            desconto: true,
            preco: 500
        },
        {
            id: 6,
            nome: "Tênis Masculino Asics Gel-Thunderlight - Preto+Laranja",
            image: "https://static.netshoes.com.br/produtos/tenis-puma-skyrocket-lite-unissex/58/PI3-1812-058/PI3-1812-058_detalhe1.jpg",
            tipo: 'Masculino',
            categoria: ['Masculino, Tênis'],
            desconto: true,
            preco: 500
        },
        {
            id: 7,
            nome: "Tênis Masculino Asics Gel-Thunderlight - Preto+Laranja",
            image: "https://static.netshoes.com.br/produtos/tenis-puma-skyrocket-lite-unissex/58/PI3-1812-058/PI3-1812-058_detalhe1.jpg",
            tipo: 'Masculino',
            categoria: ['Masculino, Tênis'],
            desconto: true,
            preco: 500
        },
        {
            id: 8,
            nome: "Tênis Masculino Asics Gel-Thunderlight - Preto+Laranja",
            image: "https://static.netshoes.com.br/produtos/tenis-puma-skyrocket-lite-unissex/58/PI3-1812-058/PI3-1812-058_detalhe1.jpg",
            tipo: 'Masculino',
            categoria: ['Masculino, Tênis'],
            desconto: true,
            preco: 500
        },
        {
            id: 9,
            nome: "Tênis Masculino Asics Gel-Thunderlight - Preto+Laranja",
            image: "https://static.netshoes.com.br/produtos/tenis-puma-skyrocket-lite-unissex/58/PI3-1812-058/PI3-1812-058_detalhe1.jpg",
            tipo: 'Masculino',
            categoria: ['Masculino, Tênis'],
            desconto: true,
            preco: 500
        },
        {
            id: 10,
            nome: "Tênis Masculino Asics Gel-Thunderlight - Preto+Laranja",
            image: "https://static.netshoes.com.br/produtos/tenis-puma-skyrocket-lite-unissex/58/PI3-1812-058/PI3-1812-058_detalhe1.jpg",
            tipo: 'Masculino',
            categoria: ['Masculino, Tênis'],
            desconto: true,
            preco: 500
        },
        {
            id: 11,
            nome: "Tênis Masculino Asics Gel-Thunderlight - Preto+Laranja",
            image: "https://static.netshoes.com.br/produtos/tenis-puma-skyrocket-lite-unissex/58/PI3-1812-058/PI3-1812-058_detalhe1.jpg",
            tipo: 'Masculino',
            categoria: ['Masculino, Tênis'],
            desconto: true,
            preco: 500
        },
        {
            id: 12,
            nome: "Tênis Masculino Asics Gel-Thunderlight - Preto+Laranja",
            image: "https://static.netshoes.com.br/produtos/tenis-puma-skyrocket-lite-unissex/58/PI3-1812-058/PI3-1812-058_detalhe1.jpg",
            tipo: 'Masculino',
            categoria: ['Masculino, Tênis'],
            desconto: true,
            preco: 500
        },
        {
            id: 13,
            nome: "Tênis Masculino Asics Gel-Thunderlight - Preto+Laranja",
            image: "https://static.netshoes.com.br/produtos/tenis-puma-skyrocket-lite-unissex/58/PI3-1812-058/PI3-1812-058_detalhe1.jpg",
            tipo: 'Masculino',
            categoria: ['Masculino, Tênis'],
            desconto: true,
            preco: 500
        },
        {
            id: 14,
            nome: "Tênis Masculino Asics Gel-Thunderlight - Preto+Laranja",
            image: "https://static.netshoes.com.br/produtos/tenis-puma-skyrocket-lite-unissex/58/PI3-1812-058/PI3-1812-058_detalhe1.jpg",
            tipo: 'Masculino',
            categoria: ['Masculino, Tênis'],
            desconto: true,
            preco: 500
        },
        {
            id: 15,
            nome: "Tênis Masculino Asics Gel-Thunderlight - Preto+Laranja",
            image: "https://static.netshoes.com.br/produtos/tenis-puma-skyrocket-lite-unissex/58/PI3-1812-058/PI3-1812-058_detalhe1.jpg",
            tipo: 'Masculino',
            categoria: ['Masculino, Tênis'],
            desconto: true,
            preco: 500
        }
    ]);

    return(
        <>
        <Header/>
        <div id='center-carousel'>
        <Carousel infiniteLoop useKeyboardArrows autoPlay showArrows={true} showStatus={false} showThumbs={false} dynamicHeight>
                <div class="img-carousel">
                    <img src="https://www.mundorh.com.br/wp-content/uploads/2022/11/Netshoes-Black-Friday.jpg.webp" />
                </div>
                <div class="img-carousel">
                    <img src="https://i0.wp.com/prdnetshoes.wpcomstaging.com/wp-content/uploads/2021/11/blackfriday_20211125.png?fit=1918%2C504&ssl=1" />
                </div>
        </Carousel>
        </div>
        <div class='promos-align'>
        <img src='https://static.netshoes.com.br/bnn/l_netshoes/2024-07-16/527_01.jpg'></img>
        <img src='https://static.netshoes.com.br/bnn/l_netshoes/2024-07-16/1686_02.jpg'></img>
        <img src='https://static.netshoes.com.br/bnn/l_netshoes/2024-07-16/1596_03.jpg'></img>
        <img src='https://static.netshoes.com.br/bnn/l_netshoes/2024-07-16/9101_04.jpg'></img>
        </div>
        <div id='center-lista-produtos'>
            <h1 id='title-produtos'>Em Destaque</h1>
            <ListarProdutos listaObjetos={listaObjetos.sort().slice(0, 3)} />
        </div>
        <br></br>
        <div class='promos-align-2'>
            <h1 id='promos-aling-h1'>NA NETSHOES TAMBÉM TEM:</h1>
        <img src='https://static.netshoes.com.br/bnn/l_netshoes/2024-04-19/2195_1_1_tnis.png'></img>
        <img src='https://static.netshoes.com.br/bnn/l_netshoes/2024-04-19/4786_1_2_chuteiras.png'></img>
        <img src='https://static.netshoes.com.br/bnn/l_netshoes/2024-04-19/9042_1_3_camisastimes.png'></img>
        <img src='https://static.netshoes.com.br/bnn/l_netshoes/2024-04-19/777_1_4_suplementos.png'></img>
        <img src='https://static.netshoes.com.br/bnn/l_netshoes/2024-04-19/3_1_5_camisetas.png'></img>
        <img src='https://static.netshoes.com.br/bnn/l_netshoes/2024-04-19/3583_1_6_jaquetas.png'></img>
        <img src='https://static.netshoes.com.br/bnn/l_netshoes/2024-04-19/9371_1_7_mochilas.png'></img>
        </div>
        <div id='center-lista-produtos'>
            <h1 id='title-produtos'>Clientes também compram:</h1>
            <ListarProdutos listaObjetos={listaObjetos.sort().slice(-12)} />
        </div>
        <br></br>
        <br></br>
        <Footer Creditos={"João Pedro Fernandes Picolo"}/>
        </>
    )
}