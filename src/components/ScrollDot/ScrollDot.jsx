import "./scrollDot.scss";
import {
  AiFillHome,
  AiFillBook,
  AiFillProject,
  AiFillContacts,
} from "react-icons/ai";
import { motion } from "framer-motion";

const ScrollDot = () => {
  const urls = [
    { id: 1, path: "Home", icon: <AiFillHome /> },
    { id: 2, path: "About", icon: <AiFillBook /> },
    { id: 3, path: "Projects", icon: <AiFillProject /> },
    { id: 4, path: "Contact", icon: <AiFillContacts /> },
  ];
  return (
    <div className="scrollDot">
      {urls.map((url) => (
        <motion.a
          whileHover={{ color: "pink" }}
          href={`#${url.path}`}
          key={url.id}
        >
          {url.icon}
        </motion.a>
      ))}
    </div>
  );
};

export default ScrollDot;
