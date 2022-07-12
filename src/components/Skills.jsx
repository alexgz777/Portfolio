import React from "react";
import "../styles/Skills.css";
import logotypes from "../assets/skills/skillsLogotypes.js";
import strings from "../assets/languages/about.js";

const Skills = ({ language }) => {
  return (
    <div id="Skills" className="skills">
      <span className="skills__span">
        {strings.languageSkills[language].titleSkills}
      </span>
      <ul className="skills__ul">
        {logotypes.map((e) => (
          <li key={e.title}>
            <img className="logotypes" src={e.logo} alt={e.title} />
            <h2 className="logotypes__title">{e.title}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
