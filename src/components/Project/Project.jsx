import "./project.scss";
import { portfolios } from "../Item/Item";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

// const portfolios = [
//   {
//     id: 1,
//     title: "Title Here",
//     img: "https://images.unsplash.com/photo-1707343846292-56e4c6abf291?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est iure maiores suscipit doloremque fugiat, sequi quod, ipsam autem quaerat quae provident aperiam nobis perspiciatis animi ipsa voluptatibus enim quidem illo.",
//   },
//   {
//     id: 2,
//     title: "Title Here",
//     img: "https://images.unsplash.com/photo-1709433157272-18e3517fb36a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8",
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est iure maiores suscipit doloremque fugiat, sequi quod, ipsam autem quaerat quae provident aperiam nobis perspiciatis animi ipsa voluptatibus enim quidem illo.",
//   },
//   {
//     id: 3,
//     title: "Title Here",
//     img: "https://images.unsplash.com/photo-1709634539435-f9fccaf0fda1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D",
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est iure maiores suscipit doloremque fugiat, sequi quod, ipsam autem quaerat quae provident aperiam nobis perspiciatis animi ipsa voluptatibus enim quidem illo.",
//   },
//   {
//     id: 4,
//     title: "Title Here",
//     img: "https://images.unsplash.com/photo-1682687220363-35e4621ed990?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw1NXx8fGVufDB8fHx8fA%3D%3D",
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est iure maiores suscipit doloremque fugiat, sequi quod, ipsam autem quaerat quae provident aperiam nobis perspiciatis animi ipsa voluptatibus enim quidem illo.",
//   },
// ];
// portfolio section created
const PortfolioSection = ({ portfolio }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <motion.section>
      <div className="container">
        <div className="wrapper">
          <motion.div className="imageContainer" ref={ref}>
            <motion.img
              src={portfolio.img}
              whileHover={{ borderRadius: "100px 0 100px 0" }}
            />
          </motion.div>
          <motion.div className="textContainer" style={{ y: scaleY }}>
            <h1>{portfolio.title}</h1>
            <p>{portfolio.desc}</p>
            <motion.button
              whileHover={{ borderRadius: "20px 0 20px 0", cursor: "pointer" }}
            >
              Live Demo
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

const Projects = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
  });

  return (
    <div className="project" ref={ref}>
      <div className="progress">
        <h1>My Works</h1>
        <motion.div
          className="progressBar"
          style={{ scaleX: scaleX }}
        ></motion.div>
      </div>
        {/* portfolio section used */}
        {portfolios.map((portfolio) => (
          <PortfolioSection portfolio={portfolio} key={portfolio.id} />
        ))}
    </div>
  );
};

export default Projects;
