import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/images/logo.png';

const Header = () => {
    return (
        <>
        <div className='header'>
            <div className='img_logo_header'>
                <img src={logo} alt=''></img>
            </div>
            <nav className='navbar_header'>
                <Link to="/">Home</Link>
                <Link to="/Apropos">A Propos</Link>
            </nav>
        </div>
        </>
    )
}

export default Header;