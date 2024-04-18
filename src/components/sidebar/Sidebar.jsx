
import Link from "../Links";
import ToggleButton from "./ToggleButton/ToggleButton"
import { useState } from "react";
import { motion } from "framer-motion";

const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 20,
      duration: 0.5,
      when: "beforeChildren",
    },
  },
  close: {
    clipPath: "circle(75px at 0px 0px)",
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 20,
      duration: 0.5,
      // when: "afterChildren",
    },
  },
};

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (

    <motion.nav className=" top-0 flex items-center " animate={open?"open":"close"} >
      <motion.div className="absolute top-0 h-screen w-screen md:w-[500px] flex bg-value5 justify-center items-center transition-all duration-300 ease-out" variants={variants} >
        <Link />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.nav>
  );
};

export default Sidebar;
