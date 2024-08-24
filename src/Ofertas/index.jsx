import React, { useState } from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer';
import ListarProdutos from '../components/ListarProdutos';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Ofertas(){
    const [listaObjetos, setListaObjetos] = useState([
        {
            id: 1,
            nome: "Tênis Nike Air Max Excee Masculino - Branco+Preto",
            image: "https://static.netshoes.com.br/produtos/tenis-nike-air-max-excee-masculino/28/HZM-3176-028/HZM-3176-028_zoom1.jpg",
            tipo: 'Masculino',
            categoria: ['Masculino, Tênis'],
            desconto: true,
            preco: 500
        },
        {
            id: 2,
            nome: "Tênis Nike Air Max Excee Masculino - Branco+Preto",
            image: "https://static.netshoes.com.br/produtos/tenis-nike-air-max-excee-masculino/28/HZM-3176-028/HZM-3176-028_zoom1.jpg",
            tipo: 'Masculino',
            categoria: ['Masculino, Tênis'],
            desconto: true,
            preco: 500
        },
        {
            id: 3,
            nome: "Tênis Nike Air Max Excee Masculino - Branco+Preto",
            image: "https://static.netshoes.com.br/produtos/tenis-nike-air-max-excee-masculino/28/HZM-3176-028/HZM-3176-028_zoom1.jpg",
            tipo: 'Masculino',
            categoria: ['Masculino, Tênis'],
            desconto: true,
            preco: 500
        },
        {
            id: 4,
            nome: "Tênis Nike Air Max Excee Masculino - Branco+Preto",
            image: "https://static.netshoes.com.br/produtos/tenis-nike-air-max-excee-masculino/28/HZM-3176-028/HZM-3176-028_zoom1.jpg",
            tipo: 'Masculino',
            categoria: ['Masculino, Tênis'],
            desconto: true,
            preco: 500
        },
        {
            id: 5,
            nome: "Tênis Nike Air Max Excee Masculino - Branco+Preto",
            image: "https://static.netshoes.com.br/produtos/tenis-nike-air-max-excee-masculino/28/HZM-3176-028/HZM-3176-028_zoom1.jpg",
            tipo: 'Masculino',
            categoria: ['Masculino, Tênis'],
            desconto: true,
            preco: 500
        },
        {
            id: 6,
            nome: "Tênis Nike Air Max Excee Masculino - Branco+Preto",
            image: "https://static.netshoes.com.br/produtos/tenis-nike-air-max-excee-masculino/28/HZM-3176-028/HZM-3176-028_zoom1.jpg",
            tipo: 'Masculino',
            categoria: ['Masculino, Tênis'],
            desconto: true,
            preco: 500
        },
        {
            id: 7,
            nome: "Tênis Nike Air Max Excee Masculino - Branco+Preto",
            image: "https://static.netshoes.com.br/produtos/tenis-nike-air-max-excee-masculino/28/HZM-3176-028/HZM-3176-028_zoom1.jpg",
            tipo: 'Masculino',
            categoria: ['Masculino, Tênis'],
            desconto: true,
            preco: 500
        },
        {
            id: 8,
            nome: "Tênis Nike Air Max Excee Masculino - Branco+Preto",
            image: "https://static.netshoes.com.br/produtos/tenis-nike-air-max-excee-masculino/28/HZM-3176-028/HZM-3176-028_zoom1.jpg",
            tipo: 'Masculino',
            categoria: ['Masculino, Tênis'],
            desconto: true,
            preco: 500
        },
        {
            id: 9,
            nome: "Tênis Nike Air Max Excee Masculino - Branco+Preto",
            image: "https://static.netshoes.com.br/produtos/tenis-nike-air-max-excee-masculino/28/HZM-3176-028/HZM-3176-028_zoom1.jpg",
            tipo: 'Masculino',
            categoria: ['Masculino, Tênis'],
            desconto: true,
            preco: 500
        },
        {
            id: 10,
            nome: "Tênis Nike Air Max Excee Masculino - Branco+Preto",
            image: "https://static.netshoes.com.br/produtos/tenis-nike-air-max-excee-masculino/28/HZM-3176-028/HZM-3176-028_zoom1.jpg",
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
                    <img src="https://pro2-bar-s3-cdn-cf.myportfolio.com/8fbe7dae1a177388dfa06cf3db3bc9d6/b70034ea-c029-4424-b600-ad5a0a16b0a8_rw_1200.jpg?h=ecdfb626b1b0649b1d7b539d361f4ffc" />
                </div>
                <div class="img-carousel">
                    <img src="https://www.feevale.br/Comum/midias/13f350f4-e72a-49dd-af58-e3df94923a10/1920x450/banner_topo_site_1920x450-compressed.jpg" />
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
            <h1 id='promos-aling-h1'>NAVEGUE POR MARCAS:</h1>
        <img src='https://static.netshoes.com.br/bnn/l_netshoes/2023-09-21/405_adidas.png'></img>
        <img src='https://static.netshoes.com.br/bnn/l_netshoes/2023-09-21/7286_nike.png'></img>
        <img src='https://static.netshoes.com.br/bnn/l_netshoes/2023-09-21/5274_olympikus.png'></img>
        <img src='https://static.netshoes.com.br/bnn/l_netshoes/2023-10-17/5344_lacoste.png'></img>
        <img src='https://static.netshoes.com.br/bnn/l_netshoes/2023-09-21/6877_puma.png'></img>
        <img src='https://static.netshoes.com.br/bnn/l_netshoes/2023-09-21/3585_mizuno.png'></img>
        <img src='https://static.netshoes.com.br/bnn/l_netshoes/2023-09-21/3769_oakley.png'></img>
        </div>
        <div id='center-lista-produtos'>
            <h1 id='title-produtos'>Em Alta:</h1>
            <ListarProdutos listaObjetos={listaObjetos.sort().slice(-7)} />
        </div>
        <br></br>
        <br></br>
        <Footer Creditos={"João Pedro Fernandes Picolo"}/>
        </>
    )
}