import "./projects.scss";
import {motion, useInView} from 'framer-motion';
import { heroVariants } from "../Item/Item";
import { useRef } from "react";
const Projects = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div
      className="projects"
      variants={heroVariants}
      initial="initial"
      ref={ref}
      animate={isInView && "animate"}
    >
      <motion.div className="textContainer" variants={heroVariants}>
        <p>Something to write here</p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={heroVariants}>
        <motion.div className="title">
          <img src="/people.webp" alt="img" />
          <h1>
            <motion.b
              whileHover={{
                color: "orange",
                transitionDuration: " 0.3s",
                transitionTimingFunction: "ease-in-out",
              }}
            >
              Some
            </motion.b>{" "}
            Text
          </h1>
        </motion.div>
        <motion.div className="title">
          <h1>
            <motion.b
              whileHover={{
                color: "orange",
                transitionDuration: "0.3s",
                transitionTimingFunction: "ease-in-out",
              }}
            >
              Some
            </motion.b>{" "}
            Text
          </h1>
          <button>Click Here</button>
        </motion.div>
      </motion.div>
      <motion.div className="listContainer" variants={heroVariants}>
        <div className="box">
          <h1>Title</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            facere, dolore asperiores quas quaerat error qui molestias quo odit
            sequi ea sed excepturi? Obcaecati corporis accusamus deserunt labore
            esse. Molestias.
          </p>
          <button>View</button>
        </div>
        <div className="box">
          <h1>Title</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            facere, dolore asperiores quas quaerat error qui molestias quo odit
            sequi ea sed excepturi? Obcaecati corporis accusamus deserunt labore
            esse. Molestias.
          </p>
          <button>View</button>
        </div>
        <div className="box">
          <h1>Title</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            facere, dolore asperiores quas quaerat error qui molestias quo odit
            sequi ea sed excepturi? Obcaecati corporis accusamus deserunt labore
            esse. Molestias.
          </p>
          <button>View</button>
        </div>
        <div className="box">
          <h1>Title</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            facere, dolore asperiores quas quaerat error qui molestias quo odit
            sequi ea sed excepturi? Obcaecati corporis accusamus deserunt labore
            esse. Molestias.
          </p>
          <button>View</button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
