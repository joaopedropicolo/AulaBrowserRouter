import React, { useState } from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer';
import ListarProdutos from '../components/ListarProdutos';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "../globals.css";

export default function Home() {
    const [listaObjetos, setListaObjetos] = useState([
        {
            id: 1,
            nome: "Tênis Masculino Asics Gel-Thunderlight - Preto+Laranja",
            image: "https://static.netshoes.com.br/produtos/tenis-masculino-asics-gel-thunderlight/50/2FW-0900-050/2FW-0900-050_zoom1.jpg",
            tipo: 'Masculino',
            categoria: ['Masculino, Tênis'],
            preco: 500
        },
        {
            id: 2,
            nome: "Tênis Masculino Asics Gel-Thunderlight - Preto+Laranja",
            image: "https://static.netshoes.com.br/produtos/tenis-masculino-asics-gel-thunderlight/50/2FW-0900-050/2FW-0900-050_zoom1.jpg",
            tipo: 'Masculino',
            categoria: ['Masculino, Tênis'],
            preco: 500
        },
        {
            id: 3,
            nome: "Tênis Masculino Asics Gel-Thunderlight - Preto+Laranja",
            image: "https://static.netshoes.com.br/produtos/tenis-masculino-asics-gel-thunderlight/50/2FW-0900-050/2FW-0900-050_zoom1.jpg",
            tipo: 'Masculino',
            categoria: ['Masculino, Tênis'],
            preco: 500
        },
        {
            id: 4,
            nome: "Tênis Masculino Asics Gel-Thunderlight - Preto+Laranja",
            image: "https://static.netshoes.com.br/produtos/tenis-masculino-asics-gel-thunderlight/50/2FW-0900-050/2FW-0900-050_zoom1.jpg",
            tipo: 'Masculino',
            categoria: ['Masculino, Tênis'],
            preco: 500
        },
        {
            id: 5,
            nome: "Tênis Masculino Asics Gel-Thunderlight - Preto+Laranja",
            image: "https://static.netshoes.com.br/produtos/tenis-masculino-asics-gel-thunderlight/50/2FW-0900-050/2FW-0900-050_zoom1.jpg",
            tipo: 'Masculino',
            categoria: ['Masculino, Tênis'],
            preco: 500
        },
        {
            id: 6,
            nome: "Tênis Masculino Asics Gel-Thunderlight - Preto+Laranja",
            image: "https://static.netshoes.com.br/produtos/tenis-masculino-asics-gel-thunderlight/50/2FW-0900-050/2FW-0900-050_zoom1.jpg",
            tipo: 'Masculino',
            categoria: ['Masculino, Tênis'],
            preco: 500
        },
        {
            id: 7,
            nome: "Tênis Masculino Asics Gel-Thunderlight - Preto+Laranja",
            image: "https://static.netshoes.com.br/produtos/tenis-masculino-asics-gel-thunderlight/50/2FW-0900-050/2FW-0900-050_zoom1.jpg",
            tipo: 'Masculino',
            categoria: ['Masculino, Tênis'],
            preco: 500
        },
        {
            id: 8,
            nome: "Tênis Masculino Asics Gel-Thunderlight - Preto+Laranja",
            image: "https://static.netshoes.com.br/produtos/tenis-masculino-asics-gel-thunderlight/50/2FW-0900-050/2FW-0900-050_zoom1.jpg",
            tipo: 'Masculino',
            categoria: ['Masculino, Tênis'],
            preco: 500
        },
        {
            id: 9,
            nome: "Tênis Masculino Asics Gel-Thunderlight - Preto+Laranja",
            image: "https://static.netshoes.com.br/produtos/tenis-masculino-asics-gel-thunderlight/50/2FW-0900-050/2FW-0900-050_zoom1.jpg",
            tipo: 'Masculino',
            categoria: ['Masculino, Tênis'],
            preco: 500
        }
    ]);
    return(
        <>
        <Header/>
        <div id='center-carousel'>
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
        </div>
        <div class='promos-align'>
        <img src='https://static.netshoes.com.br/bnn/l_netshoes/2024-07-16/527_01.jpg'></img>
        <img src='https://static.netshoes.com.br/bnn/l_netshoes/2024-07-16/1686_02.jpg'></img>
        <img src='https://static.netshoes.com.br/bnn/l_netshoes/2024-07-16/1596_03.jpg'></img>
        <img src='https://static.netshoes.com.br/bnn/l_netshoes/2024-07-16/9101_04.jpg'></img>
        </div>
        <div id='center-lista-produtos'>
            <h1 id='title-produtos'>Home</h1>
            <ListarProdutos listaObjetos={listaObjetos.sort().slice(0, 3)} />
        </div>
        <br></br>
        <div class='promos-align'>
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
            <h1 id='title-produtos'>Mais vistos</h1>
            <ListarProdutos listaObjetos={listaObjetos.sort().slice(-3)} />
        </div>
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
            <h1 id='title-produtos'>Confira também</h1>
            <ListarProdutos listaObjetos={listaObjetos.sort().slice(-3)} />
        </div>
        <div id='align-last-image'>
            <div class='promos-align'>
                <img src='https://static.netshoes.com.br/bnn/l_netshoes/2024-08-19/6470_desk_fashionstyle.png'></img>
            </div>
        </div>
        <br></br>
        <br></br>
        <Footer Creditos={"João Pedro Fernandes Picolo"}/>
        </>
    )
}