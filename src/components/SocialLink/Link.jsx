import "./link.scss";
import {
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiFillGithub,
  AiFillBehanceCircle,
} from "react-icons/ai";
import { motion } from "framer-motion"; 
import { linkItemVariants,linkVariants } from "../Item/Item";
const Link = () => {
  const urls = [
    {
      id: 1,
      name: "LinkedIn",
      icon: <AiFillLinkedin />,
      url: "https://www.linkedin.com/in/bhagyadeep-ghosh-03705924b/",
    },
    {
      id: 2,
      name: "Twitter",
      icon: <AiFillTwitterSquare />,
      url: "https://twitter.com/bhagyadeepghosh",
    },
    {
      id: 3,
      name: "Github",
      icon: <AiFillGithub />,
      url: "https://github.com/Bhagyadeep0",
    },
    {
      id: 4,
      name: "Behance",
      icon: <AiFillBehanceCircle />,
      url: "https://www.behance.net/bhagyadeep_ghosh",
    },
  ];

  return (
    <motion.ul className="links" variants={linkVariants} >
      {urls.map((url) => (
        <motion.a href={`${url.url}`} key={url.id} target="_blank" className="urls" variants={linkItemVariants} whileHover={{scale:1.2}} whileTap={{scale:0.9}}>
          {url.icon}
        </motion.a>
      ))}
    </motion.ul>
  );
};

export default Link;
