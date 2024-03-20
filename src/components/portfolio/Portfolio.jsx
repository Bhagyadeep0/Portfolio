import "./portfolio.scss";
import { portfolios } from "../item/Item";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

// portfolio section created
const PortfolioSection = ({ portfolio }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const scaleY = useTransform(scrollYProgress,[0,1], [-300,300]);

  return (
    <motion.section>
      <div className="container">
        <div className="wrapper">
          <motion.div className="imageContainer" ref={ref}>
            <motion.img src={portfolio.img} whileHover={{borderRadius:"100px 0 100px 0"}}  />
          </motion.div>
          <motion.div className="textContainer" style={{y:scaleY}}>
            <h1>{portfolio.title}</h1>
            <p>{portfolio.desc}</p>
            <motion.button whileHover={{borderRadius:"20px 0 20px 0",cursor:"pointer"}}>Live Demo</motion.button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end','start start'],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>My Works</h1>
        <motion.div className="progressBar" style={{ scaleX:scaleX }}></motion.div>
      </div>
      {/* portfolio section used */}
      {portfolios.map((portfolio) => (
        <PortfolioSection portfolio={portfolio} key={portfolio.id} />
      ))}
    </div>
  );
};

export default Portfolio;
