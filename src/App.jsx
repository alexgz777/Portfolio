import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en"
  );
  const changeLanguage = (lang) => {
    localStorage.setItem("language", lang);
    setLanguage(lang);
  };

  const [path, setPath] = useState("");
  const handleScroll = () => {
    const { scrollY } = window;
    const about = document.querySelector("#About").offsetHeight / 2 ;
    const skills = document.querySelector("#Skills").offsetHeight + home;
    const projects = document.querySelector("#Projects").offsetHeight + skills;
    if (scrollY > projects) {
      return setPath("Contact");
    }
    if (scrollY > skills) {
      return setPath("Projects");
    }
    if (scrollY > about) {
      return setPath("Skills");
    }
    if (scrollY < about) {
      return setPath("");
    }
  };

  useEffect(() => {
    document.body.onscroll = handleScroll;
  }, []);

  return (
    <div className="App">
      <Navbar path={path} language={language} changeLanguage={changeLanguage} />
      <About language={language} />
      <Skills language={language} />
      <Projects language={language} />
      <Contact language={language} />
    </div>
  );
}

export default App;
