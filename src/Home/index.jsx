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
            nome: "Sandália crocs crocband cars lightning red - Vermelho",
            image: "https://static.netshoes.com.br/produtos/sandalia-crocs-crocband-cars-lightning-red/16/FDT-6343-016/FDT-6343-016_zoom1.jpg",
            tipo: 'Masculino',
            categoria: ['Masculino, Tênis, Infantil'],
            preco: 500
        },
        {
            id: 2,
            nome: "Bota Couro Bull Terrier Phoenix Masculina",
            image: "https://static.netshoes.com.br/produtos/bota-couro-bull-terrier-phoenix-masculina/64/A52-3685-264/A52-3685-264_detalhe1.jpg",
            tipo: 'Masculino',
            categoria: ['Masculino, Bota'],
            preco: 500
        },
        {
            id: 3,
            nome: "Tênis Infantil Disney Stich Menina",
            image: "https://static.netshoes.com.br/produtos/tenis-infanil-disney-stich-menina/91/QPV-2059-791/QPV-2059-791_detalhe1.jpg",
            tipo: 'Masculino',
            categoria: ['Masculino, Tênis, Infantil'],
            preco: 500
        },
        {
            id: 4,
            nome: "Tênis Nike Downshifter 13 Feminino",
            image: "https://static.netshoes.com.br/produtos/tenis-nike-downshifter-13-feminino/06/JD8-6467-006/JD8-6467-006_zoom1.jpg",
            tipo: 'Feminino',
            categoria: ['Feminino, Tênis'],
            preco: 500
        },
        {
            id: 5,
            nome: "Tênis Masculino Asics Gel-Thunderlight - Preto+Laranja",
            image: "https://static.netshoes.com.br/produtos/tenis-under-armour-charged-first/72/39W-3305-172/39W-3305-172_zoom1.jpg",
            tipo: 'Masculino',
            categoria: ['Masculino, Tênis, Infantil'],
            preco: 500
        },
        {
            id: 6,
            nome: "Tênis Mizuno Wave Titan 2 Masculino",
            image: "https://static.netshoes.com.br/produtos/tenis-mizuno-wave-titan-2-masculino/93/2FU-6367-793/2FU-6367-793_zoom1.jpg",
            tipo: 'Masculino',
            categoria: ['Masculino, Tênis'],
            preco: 500
        },
        {
            id: 7,
            nome: "Sandália Crocs Croband Clog",
            image: "https://static.netshoes.com.br/produtos/sandalia-crocs-croband-clog/88/FDT-0203-088/FDT-0203-088_detalhe1.jpg",
            tipo: 'Masculino',
            categoria: ['Masculino, Crocs'],
            preco: 500
        },
        {
            id: 8,
            nome: "Tênis Adidas Response Runner",
            image: "https://static.netshoes.com.br/produtos/tenis-adidas-response-runner/26/FB9-3696-026/FB9-3696-026_zoom1.jpg",
            tipo: 'Masculino',
            categoria: ['Masculino, Tênis'],
            preco: 500
        },
        {
            id: 9,
            nome: "Tênis Mizuno Wave Titan 2 Masculino",
            image: "https://static.netshoes.com.br/produtos/tenis-mizuno-wave-titan-2-masculino/06/2FU-6367-006/2FU-6367-006_zoom1.jpg",
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
                <div className="img-carousel">
                    <img src="https://i0.wp.com/prdnetshoes.wpcomstaging.com/wp-content/uploads/2024/06/novo-posicionamento-logomarca-e-slogan-da-netshoes.png?fit=1050%2C450&ssl=1" />
                </div>
                <div className="img-carousel">
                    <img src="https://i0.wp.com/prdnetshoes.wpcomstaging.com/wp-content/uploads/2021/02/aniversario21_netshoes_20210211.jpeg?fit=820%2C312&ssl=1" />
                </div>
                <div className="img-carousel">
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/3b60b035762415.5702ff8b7f02f.jpg" />
                </div>
        </Carousel>
        </div>
        <div className='promos-align-top'>
        <img src='https://static.netshoes.com.br/bnn/l_netshoes/2024-07-16/527_01.jpg'></img>
        <img src='https://static.netshoes.com.br/bnn/l_netshoes/2024-07-16/1686_02.jpg'></img>
        <img src='https://static.netshoes.com.br/bnn/l_netshoes/2024-07-16/1596_03.jpg'></img>
        <img src='https://static.netshoes.com.br/bnn/l_netshoes/2024-07-16/9101_04.jpg'></img>
        </div>
        <div id='center-lista-produtos'>
        <h1 className='title-produtos'>HOME</h1>
            <div className='display-produtos'>
            <ListarProdutos listaObjetos={listaObjetos.sort().slice(0, 3)} />
            </div>
        </div>
        <br></br>
        <div className='promos-align'>
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
            <div className='display-produtos'>
            <h1 className='title-produtos'>Mais vistos</h1>
            <ListarProdutos listaObjetos={listaObjetos.sort().slice(-3)} />
            </div>
        </div>
        <div className='promos-align-2'>
            <h1 className='title-produtos'>NAVEGUE POR MARCAS:</h1>
        <img src='https://static.netshoes.com.br/bnn/l_netshoes/2023-09-21/405_adidas.png'></img>
        <img src='https://static.netshoes.com.br/bnn/l_netshoes/2023-09-21/7286_nike.png'></img>
        <img src='https://static.netshoes.com.br/bnn/l_netshoes/2023-09-21/5274_olympikus.png'></img>
        <img src='https://static.netshoes.com.br/bnn/l_netshoes/2023-10-17/5344_lacoste.png'></img>
        <img src='https://static.netshoes.com.br/bnn/l_netshoes/2023-09-21/6877_puma.png'></img>
        <img src='https://static.netshoes.com.br/bnn/l_netshoes/2023-09-21/3585_mizuno.png'></img>
        <img src='https://static.netshoes.com.br/bnn/l_netshoes/2023-09-21/3769_oakley.png'></img>
        </div>
        <div id='center-lista-produtos'>
            <h1 className='title-produtos'>Confira também</h1>     
            <ListarProdutos listaObjetos={listaObjetos.sort().slice(-5)} />        
        </div>
        <br></br>
        <br></br>
        <Footer Creditos={"João Pedro Fernandes Picolo"}/>
        </>
    )
}