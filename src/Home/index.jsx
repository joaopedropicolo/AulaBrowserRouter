import React, { useState } from 'react';
import Header from '../componentes/Header'
import Footer from '../componentes/Footer';
import { Carousel } from 'react-responsive-carousel';
import ListarProdutos from '../componentes/ListarProdutos';
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
        }
    ]);

    return(
        <>
        <Header/>
        <Carousel>
                <div class="img-carousel">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJFEp_lFVUPnok3Jt6ykmTCml-zyCYKveV_w&s" />
                </div>
                <div class="img-carousel">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJFEp_lFVUPnok3Jt6ykmTCml-zyCYKveV_w&s" />
                </div>
                <div class="img-carousel">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJFEp_lFVUPnok3Jt6ykmTCml-zyCYKveV_w&s" />
                </div>
        </Carousel>

        <div id='center-lista-produtos'>
            <h1>Produtos</h1>
            <ListarProdutos listaObjetos={listaObjetos} />
        </div>
        <Footer/>
        </>
    )
}