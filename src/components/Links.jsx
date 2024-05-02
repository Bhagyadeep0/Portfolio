//framer-motion
import {motion} from "framer-motion";

const variants ={
  open:{
    transition:{
      staggerChildren: 0.3,
    },
  },
  close:{
    transition:{
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  }
}

const itemVariants ={
  open:{
    y: 0,
    opacity: 1,
  },
  close:{
    y: 50,
    opacity: 0,
  },
}

const Links = ({setOpen}) => {
  const links = ["home", "about", "project", "contact"];

  return (
    <>
    <motion.ul className="flex flex-col items-center gap-y-5" variants={variants} >
      {links.map((link) => (
        <motion.a href={`#${link}`} key={link} variants ={itemVariants} onClick={() => setOpen((event) => !event)}>
          <li className="list-none text-primary text-[35px] hover:scale-110 transition-all duration-300 ease-in-out capitalize">{link}</li>
        </motion.a>
      ))}
    </motion.ul>
    </>
  );
};

export default Links;
