import { Link } from 'react-router-dom';


export default function Header(Link) {
    return(
        <>
        <nav>
            <ul>
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="Ofertas">
                    <li>Ofertas</li>
                </Link>
            </ul>
        </nav>
        </>
    )
}