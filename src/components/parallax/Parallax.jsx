import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "300%"]);
  const xStars = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);
  const xPlanets = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "project"
            ? "linear-gradient(180deg,#111132, #0c0c1d)"
            : "linear-gradient(180deg,#111132, #eaeaea)",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "portfolio" ? "My Projects" : "My Designs"}
      </motion.h1>

      <motion.div className="mountain"></motion.div>
      <motion.div
        className="planet"
        style={{
          x: xPlanets,
          backgroundImage:
            type === "portfolio" ? "url(/planets.png)" : "url(/sun.png)",
        }}
      ></motion.div>
      <motion.div style={{ x: xStars }} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;
