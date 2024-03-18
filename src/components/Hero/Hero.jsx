import "./hero.scss";

import {  easeInOut, motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
      <div className="textContainer">
        <h2>Hello!</h2>
        <h1>I am a <motion.b whileHover={{color:"purple"}} transition={{ease:easeInOut}}>Web Developer</motion.b> and <motion.b whileHover={{color:"green"}} transition={{ease:easeInOut}}>Graphic Designer</motion.b></h1>
        <motion.button whileHover={{ borderRadius: "20px 0 0 20px" }}>
          <b>Resume</b>
        </motion.button>
        <motion.button whileHover={{ borderRadius: "20px 0 0 20px" }}>
          <b>Contact</b>
        </motion.button>
      </div>
      <div className="imgContainer">
        <img src="/zoro1.png" alt="zoro" />
      </div>
      </div>
    </div>
  );
};

export default Hero;
