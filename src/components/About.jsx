import React from "react";
import "../styles/About.css";
import strings from "./languages/about.js";
import resume from "../assets/resumes/resume.pdf";
import logoAlexis from "../assets/logoAlexis.png";

function About({ language }) {
  return (
    <div className="about">
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
          <h3 className="description">{strings.languagePage[language].description[0]}</h3>
          <h3 className="description">{strings.languagePage[language].description[1]}</h3>
          <h3 className="description">{strings.languagePage[language].description[2]}</h3>
          <h3 className="description">{strings.languagePage[language].description[3]}</h3>
          <h3 className="description">{strings.languagePage[language].description[4]}</h3>
        </div>
      </div>
      <button className="button__cv" href={resume} download={true}>
        {strings.languagePage[language].resume}
      </button>
    </div>
  );
}

export default About;
