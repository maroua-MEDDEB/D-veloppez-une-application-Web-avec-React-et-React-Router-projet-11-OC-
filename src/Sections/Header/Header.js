import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/images/logo.png";

const Header = (props) => {
  return (
    <div className="header">
      <Link to="/" className="img_logo_header">
        <img src={logo} alt=""></img>
      </Link>
      <nav className="navbar_header">
        <NavLink
          to="/"
          className={(navInfo) =>
            navInfo.isActive ? "header-link active-link" : "header-link"
          }
        >
          Accueil
        </NavLink>
        <NavLink
          to="/Apropos"
          className={(navInfo) =>
            navInfo.isActive ? "header-link active-link" : "header-link"
          }
        >
          A Propos
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
