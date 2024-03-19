import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/projects";
import Contact from "./components/Contact/Contact";
import ScrollDot from "./components/ScrollDot/ScrollDot";
// import Sidebar from './components/Sidebar/Sidebar'

const App = () => {
  return (
    <div className="wrapper">
      <ScrollDot />
      <section id="Home">
      <Navbar />
        <Hero />
      </section>
      <section id="About">
        <About />
      </section>
      <section id="Projects">
        <Projects />
      </section>
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
