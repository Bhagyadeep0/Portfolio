import "./global.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ToTop from "./components/ToTop";

const App = () => {
  return (
    <div>
      <Navbar /> <Hero />
      <About />
      <Projects />
      <Contact />
      <ToTop />
    </div>
  );
};

export default App;
