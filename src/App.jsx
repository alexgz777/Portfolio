import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { useState } from "react";

function App() {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en"
  );
  const changeLanguage = (lang) => {
    localStorage.setItem("language", lang);
    setLanguage(lang);
  };
  return (
    <div className="App">
      <Navbar language={language} changeLanguage={changeLanguage} />
      <About language={language} />
      <Skills language={language}/>
      <Projects language={language} />
      <Contact language={language} />
    </div>
  );
}

export default App;
