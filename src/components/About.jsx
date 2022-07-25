import React from "react";
import "../styles/About.css";
import strings from "../assets/languages/about.js";
import logoAlexis from "../assets/images/myphoto.png";
import en from "../assets/resumes/en/AlexisGonzalez-resume.pdf";
import es from "../assets/resumes/es/AlexisGonzalez-CV.pdf";
import pt from "../assets/resumes/pt/AlexisGonzalez-CV.pdf";

const About = ({ language }) => {
  const resumes = { en, es, pt };
  return (
    <div id="About" className="about">
      <div className="about__title">
        <h2 className="title1">{strings.languagePage[language].title}</h2>
        <div className="about__subtitle">
          <h1 className="subtitle1">
            {strings.languagePage[language].subtitle1}
          </h1>
          <h1 className="subtitle2">
            {strings.languagePage[language].subtitle2}
          </h1>
        </div>
      </div>
      <div className="about__desc--photo">
        <img src={logoAlexis} className="photo" alt="photo" />
        <div className="desc">
          <h3 className="description">
            {strings.languagePage[language].description[0]}
          </h3>
          <h3 className="description">
            {strings.languagePage[language].description[1]}
          </h3>
          <h3 className="description">
            {strings.languagePage[language].description[2]}
          </h3>
          <h3 className="description">
            {strings.languagePage[language].description[3]}
          </h3>
          <h3 className="description">
            {strings.languagePage[language].description[4]}
          </h3>
          <h3 className="description">
            {strings.languagePage[language].description[5]}
          </h3>
        </div>
      </div>
      <a href={resumes[language]} download={true}>
        <button className="button__cv">
          {strings.languagePage[language].resume}
        </button>
      </a>
    </div>
  );
};

export default About;
