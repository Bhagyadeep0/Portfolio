import "./hero.scss";
import { motion } from "framer-motion";
import {heroVariants} from "../Item/Item"

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={heroVariants}
          initial="initial"
          whileInView="animate"
        >
          <motion.h2 variants={heroVariants}>BHAGYADEEP GHOSH</motion.h2>
          <motion.h1 variants={heroVariants}>
            Frontend Web Developer and Graphic Designer
          </motion.h1>
          <motion.div variants={heroVariants} className="buttons">
            <motion.button>Resume</motion.button>
            <motion.button>Projects</motion.button>
          </motion.div>
          <motion.img
            variants={heroVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt="scrollImg"
          />
        </motion.div>

      <div className="imageContainer">
        <img src="/zoro1.png" alt="icon" />
      </div>
      </div>
    </div>
  );
};

export default Hero;
