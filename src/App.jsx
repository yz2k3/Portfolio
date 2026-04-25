import { useState, useEffect } from "react";
import "./App.css";

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Summary from "./components/Summary";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  // dark = true means dark mode is ON
  const [dark, setDark] = useState(false);

  // Every time dark changes, add/remove "dark" class on <html>
  // CSS variables in each .css file respond to html.dark { ... }
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  function toggleDark() {
    setDark((prev) => !prev);
  }

  return (
    <div className="app-root">
      {/* Blue glow background — your exact code */}
      <div className="app-glow" />

      <div className="app-content">
        <Nav dark={dark} toggleDark={toggleDark} />
        <Hero />
        <Summary />
        <Experience />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
