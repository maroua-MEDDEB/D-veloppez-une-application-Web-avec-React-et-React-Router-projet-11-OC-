import './Footer.css';
import logo from '../../assets/images/logo_black.png';

function Footer() {
    return(
        <>
        <div className="footer">
            <div className="img_logo_footer">
                <img src={logo} alt=''></img>
            </div>
            <h2>© 2020 Kasa. All rights reserved</h2>
        </div>
        </>
    );
}

export default Footer;
