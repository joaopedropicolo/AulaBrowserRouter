import { Link } from 'react-router-dom';

export default function Header() {
    return (
    <>
    <div id='align-header'>
    <div id='top-bar'>
        <div class="img-zattini">
            <img src='https://static.netshoes.com.br/vue-components/6.58.0/netshoesbr/images/b6b347c335631107887e6d8a76a1ad39.svg'></img>
        </div>
    </div>
    <nav>
    <img class="img-logo" src='https://static.netshoes.com.br/vue-components/6.58.0/netshoesbr/images/7ba374555872e98c911690fa95eae162.svg'></img>
        <header>
            <ul class="Listas">
                <li class="li-css">
                <Link to="/"><ion-icon name="home-outline"></ion-icon>Home</Link>
                </li>
                <li class="li-css">
                <Link to="Produtos"><ion-icon name="cart-outline"></ion-icon>Produtos</Link>
                </li>
                <li class="li-css">
                <Link to="/Ofertas"><ion-icon name="sparkles-outline"></ion-icon>Ofertas</Link>
                </li>       
            </ul>
        </header>
    </nav>
    </div>
    <img src='https://static.netshoes.com.br/bnn/l_netshoes/2024-08-16/8004_1920x50.png'></img>
    </>
    );
}