import React from "react";
import "../styles/Navbar.css";
import logoAlexis from "../assets/logoAlexis.png";
import en from "../assets/icons/en.png";
import es from "../assets/icons/es.png";
import pt from "../assets/icons/pt.png";
import strings from "./languages/about.js";

export default function Navbar({ language, changeLanguage }) {
  const handleClick = (lang) => {
    changeLanguage(lang);
  };

  return (
    <nav className="navbar">
      <img src={logoAlexis} alt="navbar__logo" className="navbar__logo" />
      <a href="/" className="navbar__btn--home">
        {strings.languageNavbar[language].about}
      </a>
      <a href="/projects" className="navbar__btn--project">
        {strings.languageNavbar[language].projects}
      </a>
      <a href="/skills" className="navbar__btn--skills">
        {strings.languageNavbar[language].skills}
      </a>
      <a href="/contact" className="navbar__btn--contact">
        {strings.languageNavbar[language].contact}
      </a>
      <ul className="navbar__flags">
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
    </nav>
  );
}
