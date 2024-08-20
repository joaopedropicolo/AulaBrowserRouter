import { Link } from 'react-router-dom';

export default function Header() {
    return (
    <>
    <div id='top-bar'>
        <div class="img-zattini">
            <img src='https://static.netshoes.com.br/vue-components/6.58.0/netshoesbr/images/b6b347c335631107887e6d8a76a1ad39.svg'></img>
            <pre></pre>
            PRODUTOS DE MODA COM ATÉ 70% OFF
        </div>
    </div>
    <nav>
    <img class="img-logo" src='https://static.netshoes.com.br/vue-components/6.58.0/netshoesbr/images/7ba374555872e98c911690fa95eae162.svg'></img>
        <header>
            <ul class="Listas">
                <div class="search-form">
                <input type='text' class="search-input" placeholder="O que você está procurando?"></input>
                </div>
                <li class="li-css">
                <Link to="/"><ion-icon name="home-outline"></ion-icon>Home</Link>
                </li>
                <li class="li-css">
                <Link to="/Ofertas"><ion-icon name="pricetags-outline"></ion-icon>Ofertas</Link>
                </li>       
            </ul>
        </header>
    </nav>
    </>
    );
}