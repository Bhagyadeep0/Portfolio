import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Project/Project";
import Contact from "./components/Contact/Contact";
import ScrollDot from "./components/ScrollDot/ScrollDot";
import Sidebar from "./components/Sidebar/Sidebar";
import Particale from "./components/Particle/Particale";

const App = () => {
  return (
    <>
      <ScrollDot />
        <Sidebar />
      <section id="Home">
      <Navbar /> 
        <Particale />
        <Hero />
      </section>
      <section id="About">
        <Projects />
        <About />
      </section>
      <section id="Projects">
      </section>
      <section id="Contact">
        <Contact />
      </section>
    </>
  );
};

export default App;
