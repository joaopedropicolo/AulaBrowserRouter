import React, { useState } from 'react';
import Header from '../componentes/Header'
import Footer from '../componentes/Footer';
import ListarProdutos from '../componentes/ListarProdutos';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "../globals.css";

export default function Home() {
    const [listaObjetos, setListaObjetos] = useState([
        {
            id: 1,
            nome: "Tênis Masculino Asics Gel-Thunderlight - Preto+Laranja",
            image: "https://static.netshoes.com.br/produtos/tenis-masculino-asics-gel-thunderlight/50/2FW-0900-050/2FW-0900-050_zoom1.jpg",
            preco: 500
        },
        {
            id: 2,
            nome: "Tênis Masculino Asics Gel-Thunderlight - Preto+Laranja",
            image: "https://static.netshoes.com.br/produtos/tenis-masculino-asics-gel-thunderlight/50/2FW-0900-050/2FW-0900-050_zoom1.jpg",
            preco: 500
        },
        {
            id: 3,
            nome: "Tênis Masculino Asics Gel-Thunderlight - Preto+Laranja",
            image: "https://static.netshoes.com.br/produtos/tenis-masculino-asics-gel-thunderlight/50/2FW-0900-050/2FW-0900-050_zoom1.jpg",
            preco: 500
        },
        {
            id: 4,
            nome: "Tênis Masculino Asics Gel-Thunderlight - Preto+Laranja",
            image: "https://static.netshoes.com.br/produtos/tenis-masculino-asics-gel-thunderlight/50/2FW-0900-050/2FW-0900-050_zoom1.jpg",
            preco: 500
        },
        {
            id: 5,
            nome: "Tênis Masculino Asics Gel-Thunderlight - Preto+Laranja",
            image: "https://static.netshoes.com.br/produtos/tenis-masculino-asics-gel-thunderlight/50/2FW-0900-050/2FW-0900-050_zoom1.jpg",
            preco: 500
        },
        {
            id: 6,
            nome: "Tênis Masculino Asics Gel-Thunderlight - Preto+Laranja",
            image: "https://static.netshoes.com.br/produtos/tenis-masculino-asics-gel-thunderlight/50/2FW-0900-050/2FW-0900-050_zoom1.jpg",
            preco: 500
        },
        {
            id: 7,
            nome: "Tênis Masculino Asics Gel-Thunderlight - Preto+Laranja",
            image: "https://static.netshoes.com.br/produtos/tenis-masculino-asics-gel-thunderlight/50/2FW-0900-050/2FW-0900-050_zoom1.jpg",
            preco: 500
        }
    ]);

    return(
        <>
        <Header/>
        <Carousel infiniteLoop useKeyboardArrows autoPlay showArrows={true} showStatus={false} showThumbs={false} dynamicHeight>
                <div class="img-carousel">
                    <img src="https://i0.wp.com/prdnetshoes.wpcomstaging.com/wp-content/uploads/2024/06/novo-posicionamento-logomarca-e-slogan-da-netshoes.png?fit=1050%2C450&ssl=1" />
                </div>
                <div class="img-carousel">
                    <img src="https://i0.wp.com/prdnetshoes.wpcomstaging.com/wp-content/uploads/2021/02/aniversario21_netshoes_20210211.jpeg?fit=820%2C312&ssl=1" />
                </div>
                <div class="img-carousel">
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/3b60b035762415.5702ff8b7f02f.jpg" />
                </div>
        </Carousel>
        <div id='promo-header'>
        <img src='https://static.netshoes.com.br/bnn/l_netshoes/2024-07-16/527_01.jpg'></img>
        <img src='https://static.netshoes.com.br/bnn/l_netshoes/2024-07-16/1686_02.jpg'></img>
        <img src='https://static.netshoes.com.br/bnn/l_netshoes/2024-07-16/1596_03.jpg'></img>
        <img src='https://static.netshoes.com.br/bnn/l_netshoes/2024-07-16/9101_04.jpg'></img>
        </div>
        <div id='center-lista-produtos'>
            <h1 id='title-produtos'>Produtos</h1>
            <ListarProdutos listaObjetos={listaObjetos} />
        </div>
        <br></br>
        <Footer Creditos={"João Pedro Fernandes Picolo"}/>
        </>
    )
}