import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import ProjectPage from "./pages/ProjectPage";
import CaseStudyPage from "./pages/CaseStudyPage";
import Analytics from "./components/Analytics";
function App() {
  return (
    <Router>
      <Analytics />
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Projects />
              <Skills />

              <About />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route path="/projects/:slug" element={<ProjectPage />} />
        <Route path="/case-studies/:slug" element={<CaseStudyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
