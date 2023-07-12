import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <>
        <img src='logo.png' alt=''></img>
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/Apropos">A propos</Link>
        </nav>
        </>

    )
   
}

export default Header;