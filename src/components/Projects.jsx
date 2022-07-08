import React, { useState } from "react";
import "../styles/Projects.css";
import strings from "../assets/languages/about.js";
import { projects } from "../assets/projects";
import github from "../assets/logos/github.svg";
import { useEffect } from "react";

const Projects = ({ language }) => {
  const [Item, setItem] = useState(0);
  let backItem = () => {
    if (Item === 0) setItem(projects.length - 1);
    else setItem(Item - 1);
  };
  let goItem = () => {
    if (Item === projects.length - 1) setItem(0);
    else setItem(Item + 1);
  };
  useEffect(() => {
    setTimeout(() => {
      return goItem();
    }, 2000);
  });

  return (
    <div className="projects">
      <span className="project__span">Projects</span>
      <div className="container">
        <div className="carrousel">
          <button className="button" onClick={(e) => backItem(e)}>
            {"<"}
          </button>
          <div className="carrousel__item">
            <a href={projects[Item].title}>
              <img
                src={projects[Item].image}
                className="projectImage"
                alt="projectImage"
              />
            </a>
            <h2>{projects[Item].title}</h2>
            <p>{strings.languageProjects[projects[Item].title][language]}</p>
            <a href={projects[Item].repository}>
              <img src={github} className="githubLogo" alt="githubLogo" />
            </a>
          </div>

          <button className="button" onClick={(e) => goItem(e)}>
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
