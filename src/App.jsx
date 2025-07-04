import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import ThemeSwitcher from "./components/ThemeSwitcher";
function App() {
  return (
    <>
      {/* Page sections */}
      <>
        <Navbar />

        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </>
    </>
  );
}

export default App;
