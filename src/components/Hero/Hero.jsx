import "./hero.scss";

import {motion} from "framer-motion"

const Hero = () => {
  return (
      
    <div className="hero">
      <div className="textContainer">
        <h2>Hello!</h2>
        <h1>I am Web Developer and Graphic Designer</h1>
        <motion.button whileHover={{borderRadius:"20px 0 0 20px"}}><b>Explore</b> {"->"} </motion.button>
      </div>
      <div className="imgContainer">
        <img src="/zoro1.png" alt="zoro" />
      </div>
    </div>
  );
};

export default Hero;
