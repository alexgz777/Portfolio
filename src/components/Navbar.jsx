import React from "react";
import "../styles/Navbar.css";
import logoAlexis from "../assets/logos/logoAlexis.png";
import en from "../assets/icons/en.png";
import es from "../assets/icons/es.png";
import pt from "../assets/icons/pt.png";
import strings from "../assets/languages/about";
import { Link } from "react-scroll";
import Scrollspy from "react-scrollspy";

const Navbar = ({ path, language, changeLanguage }) => {
  const handleClick = (lang) => {
    changeLanguage(lang);
  };

  return (
    <nav className="navbar" path={!!path}>
      <Scrollspy
        items={["About", "Skills", "Projects", "Contact"]}
        currentClassName="active"
      />
      <>
        <img src={logoAlexis} alt="navbar__logo" className="navbar__logo" />
        <Link to="About" spy={true} className="navbar__btn--home">
          {strings.languageNavbar[language].about}
        </Link>
        <Link to="Skills" spy={true} className="navbar__btn--skills">
          {strings.languageNavbar[language].skills}
        </Link>
        <Link to="Projects" spy={true} className="navbar__btn--project">
          {strings.languageNavbar[language].projects}
        </Link>
        <Link to="Contact" spy={true} className="navbar__btn--contact">
          {strings.languageNavbar[language].contact}
        </Link>
        <ul className="navbar__flags--ul">
          <li onClick={() => handleClick("en")} className="navbar__flags--li">
            <img src={en} alt="en-flag" className="flags" />
          </li>
          <li onClick={() => handleClick("es")} className="navbar__flags--li">
            <img src={es} alt="es-flag" className="flags" />
          </li>
          <li onClick={() => handleClick("pt")} className="navbar__flags--li">
            <img src={pt} alt="pt-flag" className="flags" />
          </li>
        </ul>
      </>
    </nav>
  );
};
export default Navbar;
